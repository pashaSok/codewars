function undoRedo(object) {
    let lastFunc=[];
    let undoFunc=[];
    return {
        set(key, value) {
            object.hasOwnProperty(key)? lastFunc.push(['edit',key,object[key],value]):lastFunc.push(['set',key,value]);
            object[key]=value;
            undoFunc=[];
        },
        get(key) {
            return object[key]
        },
        del(key) {
            lastFunc.push(['del', key, object[key]])    
            delete object[key];
            undoFunc=[];
        },
        undo() {
            if(lastFunc.length===0){
                throw new Error('There is no operation to undo')
            }
            let delLast = lastFunc.pop();
            if(delLast[0] ==='set'){
                delete object[delLast[1]]
            }
            else if (delLast[0] === 'edit'){
                object[delLast[1]] = delLast[2]
            }
            else if(delLast[0] === 'del'){
                object[delLast[1]] = delLast[2]
            }
            undoFunc.push(delLast);
        },
          redo() {
            if(undoFunc.length === 0){
                throw new Error('Tere is no operation to redo')
            }
            const delLast = undoFunc.pop();
            if(delLast[0] === 'set'){
                object[delLast[1]]=delLast[2]
            }
            else if (delLast[0] === 'edit'){
                object[delLast[1]] = delLast[3]
            }
            else if(delLast[0] === 'del'){
                delete object[delLast[1]]
            }
            lastFunc.push(delLast);
          }
      };
  }
  