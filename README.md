# rest-api-orderList

```
---------------------------------------------------
```

Front-end Repo: [Link](https://github.com/abduljavedkhan/orderList-front-end/tree/master)

### Setup
```
npm install
npm run start
```
##### /api/products
Get All product List

Response:

![image](https://user-images.githubusercontent.com/44355278/123935013-788edf00-d9b1-11eb-9356-e45e87910a97.png)


##### /api/customers
Get All customer List

Response:

![image](https://user-images.githubusercontent.com/44355278/123934914-5d23d400-d9b1-11eb-91ac-c406a516e137.png)


##### /api/orers
Get All order List

Response:

![image](https://user-images.githubusercontent.com/44355278/123934761-3c5b7e80-d9b1-11eb-85b9-f1cf9e173b1c.png)


##### /api/orders/add
Add order

Request
```
{
    "customer_id": "54321",
    "status": "processing",
    "quantity": "4",
    "product_id": "P1456789",
    "line_total": "30"
}
```
Response:

![image](https://user-images.githubusercontent.com/44355278/123934640-1d5cec80-d9b1-11eb-9255-6f5485541591.png)

