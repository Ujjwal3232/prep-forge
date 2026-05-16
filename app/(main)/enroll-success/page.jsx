import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { CircleCheck } from "lucide-react";
import Link from "next/link";
import { stripe } from "@/lib/stripe";
import { getCourseDetails } from "@/queries/courses";
import { getUserByEmail } from "@/queries/users";
import { redirect } from "next/navigation";
import { sendEmails } from "@/lib/emails";
import { enrollForCourse } from "@/queries/enrollments";



const Success = async ({ searchParams : {session_id, courseId} }) => {

  if (!session_id) {
    throw new Error("Please provide a vaid session id that start with cs_")
  }

  const userSession = await auth();

  if (!userSession?.user?.email) {
    redirect("/login");
  } 

  const course = await getCourseDetails(courseId);
  const loggedInUser = await getUserByEmail(userSession?.user?.email);

  const checkoutSession = await stripe.checkout.sessions.retrieve(
    session_id,
    {
      expand: ["line_items" , "payment_intent"],
    }
  );

  // console.log(checkoutSession);
  const paymentIntent = checkoutSession?.payment_intent;
  const paymentStatus = paymentIntent?.status;

  /// Cutomer Info 
  const customerName = `${loggedInUser?.firstName} ${loggedInUser?.lastName
  }`;
  const customerEmail = loggedInUser?.email;
  const productName = course?.title;
  //console.log(customerName,customerEmail,productName);

  if (paymentStatus === "succeeded") {
    /// Update data to enrollment table 
    const enrolled = await enrollForCourse(
      course?.id,
      loggedInUser?.id,
      "stripe"
    );
    console.log(enrolled);

    // Send emails to the instructor and student who paid 
     const instructorName = `${course?.instructor?.firstName} ${course?.instructor?.lastName}`;
    const instructorEmail = course?.instructor?.email;
    //console.log(instructorName,instructorEmail);



    const emailsToSend = [
      {
        to: instructorEmail,
        subject: `New Enrollment For ${productName}`,
        message: `Congratulations, ${instructorName}. A new student, ${customerName} has enrolled to your course ${productName} just now. `
      },
      {
        to: customerEmail,
        subject: `Enrollment success for ${productName}`,
        message: `Hey, ${customerName}. You have successfully enrolled for the course ${productName} `
      }
    ];

      const emailSendResponse = await sendEmails(emailsToSend);
     console.log(emailSendResponse);
    
  }


  return (
    <div className="h-full w-full flex-1 flex flex-col items-center justify-center bg-slate-950 text-slate-100 px-6">
      <div className="flex flex-col items-center gap-6 max-w-[600px] text-center bg-slate-900 border border-slate-800 rounded-2xl p-10 hover:bg-slate-800 transition-all duration-300 shadow-xl">
         {
        paymentStatus === "succeeded" && (
          <>
        <CircleCheck className="w-32 h-32 bg-indigo-400 rounded-full p-5 text-white shadow-lg shadow-indigo-500/20" />

        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-slate-100 leading-relaxed">
          Congratulations! <strong>{customerName}</strong> Your Enrollment was Successful for <strong>{productName}</strong>
        </h1>
          </>
        )
      } 

        <p className="text-sm md:text-base text-slate-400 max-w-[500px]">
          Your course access has been activated successfully. You can now
          continue exploring courses or start learning immediately.
        </p>

        <div className="flex items-center gap-3">
          <Button
            
            size="sm"
            className="bg-indigo-400 hover:bg-indigo-500 text-white border border-indigo-400"
          >
            <Link href="/courses">Browse Courses</Link>
          </Button>

          <Button
            
            variant="outline"
            size="sm"
            className="border-slate-700 bg-slate-900 text-slate-200 hover:bg-slate-800 hover:text-white"
          >
            <Link href="#">Play Course</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Success;