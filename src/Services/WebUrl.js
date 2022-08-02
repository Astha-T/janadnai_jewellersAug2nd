
var urls= { 

    Sign_Up : "/api/customer/signup",
    Login : "/api/customer/login",
    OTP : "/api/customer/verify_otp",

    Update_Profile : "/api/customer/update_profile",
    Get_Profile : "/api/customer/get_profile?user_id=",

    Get_Category : "/api/customer/get_category_list?category_id=",
    Get_FavouriteProducts : "/api/customer/get_favorite_product?user_id=70",
    Get_Products : "/api/customer/get_all_product_list",
    Get_Products_By_category : "/api/customer/get_product_by_category",

    Book_Jewellery : "/api/customer/book-jewellery",
    Privacy__Policy : "/api/customer/get_privacy_policy",
    Terms_and_Conditions : "/api/customer/get_terms_conditions",
    Notifications : "/api/customer/get_user_notification?user_id=1",
    About : "/api/customer/about_us"
}
 
export default urls;
