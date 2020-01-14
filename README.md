# mongodb

# 1. Read the file using a command "mongoimport -d mydb -c things --type csv --file TechCrunchcontinentalUSA.csv --headerline"
# and after creating a collection

db.things.find().pretty()

> db.things.find()

> use mydb

switched to db mydb

> db.things.find()

{ "_id" : ObjectId("5e1cd0dcb689b37ae6bc015a"), "Name" : "Jane Doe", "Address" : "123 Main St", "City" : "Whereverville", "State" : "CA", "ZIP" : 90210 }

{ "_id" : ObjectId("5e1cd0dcb689b37ae6bc015b"), "Name" : "John Doe", "Address" : "555 Broadway Ave", "City" : "New York", "State" : "NY", "ZIP" : 10010 }

{ "_id" : ObjectId("5e1cd21362c2b102d31e6160"), "Name" : "Siddhant", "Address" : "HSR", "City" : "Bangalore", "State" : "karnataka", "ZIP" : 200033 }

{ "_id" : ObjectId("5e1cd31cd615e6f1b1249587"), "Name" : "Jane Doe", "Address" : "123 Main St", "City" : "Whereverville", "State" : "CA", "ZIP" : 90210 }

{ "_id" : ObjectId("5e1cd31cd615e6f1b1249588"), "Name" : "John Doe", "Address" : "555 Broadway Ave", "City" : "New York", "State" : "NY", "ZIP" : 10010 }

# 2. Add a record 

db.things.insert({"Name": "sidddhant", "Address": "Pune", "City": "Pune"})

WriteResult({ "nInserted" : 1 })

> db.things.find()

september" : "Ksarnataka" }515aabe777b7a6252"), "month" : "septembser", "company" : "iscicle", "numEmps" : 233, "category" : "desveloper", "city" : "basngalore", "state

{ "_id" : ObjectId("5e1cd0dcb689b37ae6bc015a"), "Name" : "Jane Doe", "Address" : "123 Main St", "City" : "Whereverville", "State" : "CA", "ZIP" : 90210 }

{ "_id" : ObjectId("5e1cd0dcb689b37ae6bc015b"), "Name" : "John Doe", "Address" : "555 Broadway Ave", "City" : "New York", "State" : "NY", "ZIP" : 10010 }

{ "_id" : ObjectId("5e1cd21362c2b102d31e6160"), "Name" : "Siddhant", "Address" : "HSR", "City" : "Bangalore", "State" : "karnataka", "ZIP" : 200033 }

{ "_id" : ObjectId("5e1cd31cd615e6f1b1249587"), "Name" : "Jane Doe", "Address" : "123 Main St", "City" : "Whereverville", "State" : "CA", "ZIP" : 90210 }

{ "_id" : ObjectId("5e1cd31cd615e6f1b1249588"), "Name" : "John Doe", "Address" : "555 Broadway Ave", "City" : "New York", "State" : "NY", "ZIP" : 10010 }

{ "_id" : ObjectId("5e1d7bb239000a2de249180d"), "Name" : "sidddhant", "Address" : "Pune", "City" : "Pune" }


# 3. If we want to add extra field on the fly. That's the power of mongodb because in relational database you have to define it first in your table


 db.things.insert([{"Name": "Karan", "Age": 20}, {"Name": "Akash", "Age": 23, "College": "Ait"}]);
BulkWriteResult({

	"writeErrors" : [ ],
	"writeConcernErrors" : [ ],
	"nInserted" : 2,
	"nUpserted" : 0,
	"nMatched" : 0,
	"nModified" : 0,
	"nRemoved" : 0,
	"upserted" : [ ]
})

> db.things.find()


{ "_id" : ObjectId("5e1cd0dcb689b37ae6bc015a"), "Name" : "Jane Doe", "Address" : "123 Main St", "City" : "Whereverville", "State" : "CA", "ZIP" : 90210 }

{ "_id" : ObjectId("5e1cd0dcb689b37ae6bc015b"), "Name" : "John Doe", "Address" : "555 Broadway Ave", "City" : "New York", "State" : "NY", "ZIP" : 10010 }

{ "_id" : ObjectId("5e1cd21362c2b102d31e6160"), "Name" : "Siddhant", "Address" : "HSR", "City" : "Bangalore", "State" : "karnataka", "ZIP" : 200033 }

{ "_id" : ObjectId("5e1cd31cd615e6f1b1249587"), "Name" : "Jane Doe", "Address" : "123 Main St", "City" : "Whereverville", "State" : "CA", "ZIP" : 90210 }

{ "_id" : ObjectId("5e1cd31cd615e6f1b1249588"), "Name" : "John Doe", "Address" : "555 Broadway Ave", "City" : "New York", "State" : "NY", "ZIP" : 10010 }

{ "_id" : ObjectId("5e1d7bb239000a2de249180d"), "Name" : "sidddhant", "Address" : "Pune", "City" : "Pune" }

{ "_id" : ObjectId("5e1d7dc039000a2de249180e"), "Name" : "Karan", "Age" : 20 }

{ "_id" : ObjectId("5e1d7dc039000a2de249180f"), "Name" : "Akash", "Age" : 23, "College" : "Ait" }
> 

