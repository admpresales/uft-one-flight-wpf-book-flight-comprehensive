'-----------------------------------------------------------------------------------------------------------------------

'-----------------------------------------------------------------------------------------------------------------------
'Desc Programming

Dim fGUI
Dim fUser
Dim fPwd
Dim fBtn

Set fGUI = Description.Create
fGUI("classname").value = "FlightsGUI\.MainWindow"
fGUI("wpftypename").value = "window"

Set fUser = Description.Create
fUser("classname").value = "System\.Windows\.Controls\.TextBox"
fUser("devname").value= "agentName"
fUser("wpftypename").value = "edit"

Set fPwd = Description.Create 'Create an empty description
fPwd("classname").value = "System\.Windows\.Controls\.PasswordBox"
fPwd("devname").value= "password"
fPwd("wpftypename").value = "edit"

Set fBtn = Description.Create 'Create an empty description
fBtn("classname").value = "System\.Windows\.Controls\.Button"
fBtn("devname").value= "okButton"
fBtn("wpftypename").value = "button"
fBtn("enabled").value = "True"

'----------------------------------------------------------------------------------------------------
'Script
'----------------------------------------------------------------------------------------------------
Const maxTries = 10
For x = 1 To maxTries Step 1 'loop checking if exists
	If ( WpfWindow(fGUI).Exist(1) ) Then 
		Exit for
	End If
Next

If x = maxTries + 1 Then
	reporter.ReportEvent micFail,"App started", "Application did not start"
	Exittest
else
	reporter.ReportEvent micInfo,"App started", "Application started in " & x & " seconds"
	
End If


WpfWindow(fGUI).WpfEdit(fUser).Set "John"
WpfWindow(fGUI).WpfEdit(fPwd).SetSecure "5a9701cbec7e"
WpfWindow(fGUI).WpfButton(fBtn).Click

Set fGUI = Nothing
Set fUser = Nothing
Set fPwd = Nothing
Set fBtn = Nothing

foo = 1 ' to make it easy to set a breakpoint so that variable values can be examined

