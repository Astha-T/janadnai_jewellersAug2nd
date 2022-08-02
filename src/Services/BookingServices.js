import urls from './WebUrl'

class BookingService {

    Book__jewellery = (data)=>{
        return fetch(urls.Book_Jewellery,{
     
         method : "POST",
         mode: "cors",
         headers : {
             "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
         },
         body : JSON.stringify(data)
        })  
 }
}
export default BookingService;