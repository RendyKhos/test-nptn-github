function LoginUser(username, password) {
    if(!username || !password) {
        sap.m.MessageToast.show("Please input username & password!");
        return;
    }

    // Clear input username & password
    InputUsername.setText("");
    InputPassword.setText("");

    NagigateToPage(username);
}