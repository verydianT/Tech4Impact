# 1
Database Schema :
- Full Name
- Email
- Phone Number
Relationships : One-to-One

   ```json
   {
     "_id": "ObjectId('AAA')",
     "fullName": "Verydian T",
     "email": "very@mail.com",
     "phoneNumber": "082113143234"
   }
   ```

# 2
Database Schema :
- Full Name
- Email
- Address (Max 2)
Relationships : One-to-few/many

   ```json
   {
     "_id": "ObjectId('AAA')",
     "fullName": "Verydian T",
     "phoneNumber": "081213343534",
     "address": [
         {
             "_id": "ObjectId('AAA')",
             "address": "Jakarta Utara"
         },{
             "_id": "ObjectId('BBB')",
             "address": "Jakarta Selatan"
         }]
   }
   ```

# 3
Database Schema :
- Product Name
- Brand Name
- Variants
Relationships : One-to-many

   ```json
    {
        "_id": "ObjectId('AAA')",
        "productName": "Kaos Polos",
        "brandName": "SkilShirt",
        "variants": [
            {
                "nameVariant": "kaos Polos Hitam",
                "color": "hitam",
                "quantity": "12",
                "price": "99.000"
            },
            {
                "nameVariant": "kaos Polos Navy",
                "color": "navy",
                "quantity": "10",
                "price": "99.000"
            }]
    }
   ```

# 4
Database Schema :
- Cinema Name
- Films (collection)
- Location Film:
- Film Name
Relationships : One-to-many

Cinema Schema
   ```json
   {
        "_id": "ObjectId('CIN1')",
        "cinemaName": "CGF",
        "films": [
            "ObjectId('FILM1')",
            "ObjectId('FILM2')"
        ],
        "location": "Pondok Indah Mall"
   },
   {
       "_id": "ObjectId('CIN2')",
       "cinemaName": "Cinema31",
       "films": [
           "ObjectId('FILM1')",
           "ObjectId('FILM2')"
       ],
        "location": "Mall Kelapa Gading"
   },
   ```

Film Schema
   ```json
   {
        "_id": "ObjectId('FILM1')",
        "filmName":"Venom 2"
    },
    {
        "_id": "ObjectId('FILM2')",
        "filmName": "Spiderman No Way Home"
    }
   ```