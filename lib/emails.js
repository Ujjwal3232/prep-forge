import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmails = async (emailInfo) => {

    if (!emailInfo) return null;

    const response = await Promise.allSettled(

        emailInfo.map(async (data) => {

            if (data.to && data.subject && data.message) {

                const to = data.to;
                const subject = data.subject;
                const message = data.message;

                const sendInfo = await resend.emails.send({

                    from: "onboarding@resend.dev",

                    to:
                        process.env.NODE_ENV === "development"
                            ? "cybergaurdian01@gmail.com"
                            : to,

                    subject: subject,

                    html: `
                        <div style="
                            font-family: Arial, sans-serif;
                            background-color: #020617;
                            padding: 20px;
                            color: #cbd5e1;
                        ">
                            <div style="
                                max-width: 600px;
                                margin: 0 auto;
                                background-color: #0f172a;
                                border-radius: 8px;
                                overflow: hidden;
                                border: 1px solid #1e293b;
                                box-shadow: 0 2px 8px rgba(0,0,0,0.4);
                            ">

                                <div style="
                                    padding: 20px;
                                    border-bottom: 1px solid #1e293b;
                                    background-color: #020617;
                                    text-align: center;
                                ">
                                    <h1 style="
                                        margin: 0;
                                        font-size: 24px;
                                        color: #818cf8;
                                    ">
                                        Prep-Forge
                                    </h1>
                                </div>

                                <div style="
                                    padding: 20px;
                                ">
                                    <p style="
                                        margin: 0;
                                        font-size: 16px;
                                        line-height: 1.7;
                                        color: #cbd5e1;
                                    ">
                                        ${message}
                                    </p>
                                </div>

                                <div style="
                                    padding: 20px;
                                    background-color: #020617;
                                    border-top: 1px solid #1e293b;
                                    text-align: center;
                                ">
                                    <p style="
                                        margin: 0;
                                        font-size: 14px;
                                        color: #94a3b8;
                                    ">
                                        This email was sent by Prep-Forge.
                                    </p>
                                </div>

                            </div>
                        </div>
                    `,
                });

                return sendInfo;

            } else {

                throw new Error(
                    `Could not send email. Please check ${JSON.stringify(data)}`
                );

            }

        })

    );

    return response;
};