export const replaceMongoIdInArray = (array) => {
    const mappedArray = array.map(item => {
      return {
        id: item._id.toString(),
        ...item
      }
    }).map(({_id, ...rest}) => rest);

    return mappedArray;
  }

  export const replaceMongoIdInObject = (obj) => {
    const {_id, ...updatedObj} = {...obj, id: obj._id.toString()};
   return updatedObj;
  }

//this function does following things:
//1. It takes an array of objects as input.
//2. It maps through each object in the array and creates a new object with an 'id' property that is the string representation of the '_id' property from the original object.
//3. It then removes the '_id' property from the new object.
//4. Finally, it returns a new array of objects with the updated structure, where each object has an 'id' property instead of '_id'.