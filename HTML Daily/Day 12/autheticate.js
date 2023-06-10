ob={"user1":"pass1","user2":"pass2","user3":"pass3"}

exports.validate=function(uname,pass){
    //retrieve password for the given user
    var p=ob[uname]
    //if user is valid
    if(p===pass){
        return true;
    }
    return false;
}

exports.addnew=function(uname,pass){
    var p=ob[uname]
    // key not found means username and password doesnot exists so add it
    if(p===undefined){
        //add a new key value pair in the object
        ob[uname]=pass
        console.log(ob);
        return true;
    }
    return false;
}