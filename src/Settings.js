const URL_DUMMY = "https://jsonplaceholder.typicode.com/users";

const URL_GET_CUSTOMERS = "http://localhost/final_project_server/public/index.php/api/customer";
const URL_POST_CUSTOMER = "http://localhost/final_project_server/public/index.php/api/customer";
const URL_GET_COMISSIONS = "http://localhost/final_project_server/public/index.php/api/comission";
const URL_GET_SALES = "http://localhost/final_project_server/public/index.php/api/sales";

const URL_ALL_DATA_FOR_INVOICES = "http://localhost/final_project_server/public/index.php/api/all_agent_orders";
const URL_GET_INVOICES = "http://localhost/final_project_server/public/index.php/api/invoices"
const URL_GET_ORDERS_INVOICES = "http://localhost/final_project_server/public/index.php/api/orderinvoices";
const URL_GET_PRODUCTS = "http://localhost/final_project_server/public/index.php/api/product";
const URL_GET_PRODUCTS_BY_ORDER = "http://localhost/final_project_server/public/index.php/api/order_items";
const URL_POST_LOGIN = "http://localhost/final_project_server/public/index.php/api/login_check";

/* const URL_GET_DUEBALANCES = "http://localhost/final_project_server/public/index.php/dueBalance/2"; */
/* const URL_GET_INVOICES_BY_CUSTOMERS = "http://localhost/final_project_server/public/index.php/api/invoicesByCustomers"; */

const allURL = [URL_DUMMY, URL_GET_CUSTOMERS, URL_GET_PRODUCTS]

export {
    URL_DUMMY,
    URL_GET_CUSTOMERS,
    URL_POST_CUSTOMER,
    URL_GET_COMISSIONS,
   /*  URL_GET_DUEBALANCES, */
    URL_GET_INVOICES,
    /* URL_GET_INVOICES_BY_CUSTOMERS, */
    URL_ALL_DATA_FOR_INVOICES,
    URL_GET_ORDERS_INVOICES,
    URL_GET_SALES,
    URL_GET_PRODUCTS,
    URL_GET_PRODUCTS_BY_ORDER,
    URL_POST_LOGIN,
    allURL
}