'DB SQLite3 Checkpoint Wizard 
'CheckPoint If DB matches passed parameter "OrderNumber" & Static "CustomerName" exists 
msgbox Parameter.Item("Order_Number") ' this halts execution until you dismiss the msgbox
print Parameter.Item("Order_Number")  ' this concatenates it to the end of the output window

' the database connection string must be parameterized to match who is running this test so
whoIsLoggedIn = Environment.Value("UserName") ' get the name
DataTable.Value("userLoggedIn", dtLocalSheet) = whoIsLoggedIn ' store it into the data table
' now, in the connection string in the cell, it can concatentate the string
DbTable("DbTable_Checkpoint").Check CheckPoint("DbTable_Checkpoint")

'-----------------------------------------------------------------------------------------------------------------------

'-----------------------------------------------------------------------------------------------------------------------
WpfWindow("Micro Focus MyFlight Sample Applicatio").WpfTabStrip("WpfTabStrip").Select "SEARCH ORDER"
WpfWindow("Micro Focus MyFlight Sample Applicatio").WpfRadioButton("byNumberRadio").Set
WpfWindow("Micro Focus MyFlight Sample Applicatio").WpfEdit("byNumberWatermark").Set Parameter("Order_Number") @@ hightlight id_;_1926714864_;_script infofile_;_ZIP::ssf6.xml_;_
WpfWindow("Micro Focus MyFlight Sample Applicatio").WpfButton("SEARCH").Click

'-----------------------------------------------------------------------------------------------------------------------

'-----------------------------------------------------------------------------------------------------------------------
'Using the DB output parameters from action 5 to perform GUI validation

WpfWindow("Micro Focus MyFlight Sample Applicatio").Check CheckPoint("FlightNum") @@ hightlight id_;_1445576_;_script infofile_;_ZIP::ssf6.xml_;_
WpfWindow("Micro Focus MyFlight Sample Applicatio").WpfComboBox("numOfTicketsCombo").Check CheckPoint("NumOfTicketsCombo")
WpfWindow("Micro Focus MyFlight Sample Applicatio").WpfObject("Order $ Price").Check CheckPoint("Order $ Price") @@ hightlight id_;_1997777216_;_script infofile_;_ZIP::ssf11.xml_;_

'Application object highlight
WpfWindow("Micro Focus MyFlight Sample Applicatio").WpfObject("Order $ Price").highlight

foo = 1 ' to make it easy to set a breakpoint so that variable values can be examined

