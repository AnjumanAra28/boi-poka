import { toast } from "react-toastify";

const getStoredReadList = ()=>{
   const storedListStr = localStorage.getItem('read-list');
   if(storedListStr){
    const storedList = JSON.parse(storedListStr);
    return storedList;
   }
   else{
    return [];
   }
}

const addToStoredReadList =(id)=>{
    const storedList = getStoredReadList();
    if (storedList.includes(id)){
       alert('already data exists');
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list',storedListStr);
        toast('added to read list')
    }
}

const getStoredWishList =()=>{
    const storedListStr= localStorage.getItem('wish-list');
    if(storedListStr){
    const storedList =JSON.parse(storedListStr);
    return storedList;
    }
    else{
        return [];
    }
}

const addToWishList =(id)=>{
    const storedList = getStoredReadList();
    if(storedList.includes(id)){
        alert('already added to the wished list');
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('wish-list',storedListStr);
        toast('added to wish list')
    }
}
export {addToStoredReadList,addToWishList,getStoredReadList,getStoredWishList}