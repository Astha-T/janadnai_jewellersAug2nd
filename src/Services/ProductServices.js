import urls from './WebUrl'

class Product_Serives 
{
 Get_Products= (data) => {
    return fetch(urls.Get_Products)
}

Get_Categories = (data) => {
    return fetch(urls.Get_Category)
}
Get_FavoriteProducts = (data) => {
    //const userId = localStorage.getItem('user_id');
    return fetch(urls.Get_FavouriteProducts);
}

Get_ProductsbyCate = (data) => {
   const categoryId = localStorage.getItem('id'); 
   console.log(categoryId)
    return fetch(urls.Get_Products_By_category+categoryId)
}


}
export default new Product_Serives();
