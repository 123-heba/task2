// ✅ إضافة مهمة جديدة مع زر "Show/Hide" يشطب على النص
function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();

    if (taskText === "") {
        alert("الرجاء إدخال مهمة صالحة!");
        return;
    }

    let li = document.createElement("li");
    let span = document.createElement("span");
    span.textContent = taskText;

    // زر "Show/Hide"
    let showBtn = document.createElement("button");
    showBtn.textContent = "Show";
    showBtn.className = "show";
    showBtn.onclick = function () {
        span.classList.toggle("completed"); // إضافة أو إزالة تأثير الشطب
        showBtn.textContent = span.classList.contains("completed") ? "Unshow" : "Show";
    };

    // زر "Delete"
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete";
    deleteBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(span);
    li.appendChild(showBtn);
    li.appendChild(deleteBtn);
    document.getElementById("taskList").appendChild(li);

    input.value = ""; // مسح الحقل بعد الإدخال
}


// ✅ البحث في القائمة
function searchTask() {
    let searchValue = document.getElementById("taskInput").value.trim().toLowerCase();
    let tasks = document.querySelectorAll("#taskList li");

    tasks.forEach(task => {
        let taskText = task.querySelector("span").textContent.toLowerCase();
        
        if (taskText.includes(searchValue)) {
            task.classList.add("highlight");
            task.style.display = "flex";
        } else {
            task.style.display = "none";
        }
    });
}

// ✅ إعادة تعيين البحث
function resetSearch() {
    document.getElementById("taskInput").value = ""; 
    let tasks = document.querySelectorAll("#taskList li");

    tasks.forEach(task => {
        task.style.display = "flex"; 
        task.classList.remove("highlight");
    });
}


// ✅ وظيفة التبديل بين الوضع الداكن والفاتح
document.getElementById("modeToggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    // تغيير النص والرمز في زر التبديل
    if (document.body.classList.contains("dark-mode")) {
        this.textContent = "☀️";
    } else {
        this.textContent = "🌙";
    }

    // حفظ الحالة في localStorage حتى تبقى عند إعادة تحميل الصفحة
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
});

// ✅ تحميل الوضع المحفوظ عند فتح الصفحة
window.onload = function () {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        document.getElementById("modeToggle").textContent = "☀️ تبديل للوضع الفاتح";
    }

};




