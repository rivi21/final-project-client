const URL_DUMMY = "https://jsonplaceholder.typicode.com/users";

const URL_GET_CUSTOMERS = "http://localhost/final_project_server/public/index.php/api/customer";
const URL_POST_CUSTOMER = "http://localhost/final_project_server/public/index.php/api/customer";
const URL_GET_COMISSIONS = "http://localhost/final_project_server/public/index.php/api/comission";
const URL_GET_INVOICES_BY_CUSTOMERS = "http://localhost/final_project_server/public/index.php/invoicesByCustomers";
const URL_GET_ORDERS_INVOICES = "http://localhost/final_project_server/public/index.php/api/orderinvoices";
const URL_GET_CUSTOMERS_ORDERS_INVOICES = "http://localhost/final_project_server/public/index.php/api/customersorders";
const URL_GET_PRODUCTS = 'http://localhost/final_project_server/public/index.php/api/product';
const URL_POST_LOGIN = 'http://localhost/final_project_server/public/index.php/api/login_check';
const URL_GET_DUEBALANCES = 'http://localhost/final_project_server/public/index.php/dueBalance/2';


const allURL = [URL_DUMMY, URL_GET_CUSTOMERS, URL_GET_PRODUCTS]

export {
    URL_DUMMY,
    URL_GET_CUSTOMERS,
    URL_POST_CUSTOMER,
    URL_GET_COMISSIONS,
    URL_GET_DUEBALANCES,
    URL_GET_INVOICES_BY_CUSTOMERS,
    URL_GET_ORDERS_INVOICES,
    URL_GET_CUSTOMERS_ORDERS_INVOICES,
    URL_GET_PRODUCTS,
    URL_POST_LOGIN,
    allURL
}