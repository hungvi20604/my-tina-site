function validate() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var email_err = document.getElementById("email_err");
    var password_err = document.getElementById("password_err");

    var login = document.getElementById("login")

    email_err.textContent = '';
    password_err.textContent = '';

    var index = 0;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        email_err.textContent = "! Email không đúng định dạng.";
        index++
    }
    var passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/;
    if (!passRegex.test(password)) {
        password_err.textContent = "! Vui lòng nhập lại mật khẩu.";
        index++
    }
    if (index == 0) {
        alert("Đăng nhập thành công !")
        window.location.href = "index.html";
        login.style.display = "none"
    } else
        return

}