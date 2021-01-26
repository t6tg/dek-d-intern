<?php

$title = $_POST["title"];
$data = $_POST["data"];
if (strlen($title) < 4 || strlen($title) > 140) {
    echo "<p>กรุณาใส่หัวข้อกระทู้ตั้งแต่ 4 ตัวอักษร ถึง 140 ตัวอักษร</p>";
    return;
}

if ($title != strip_tags($title)) {
    echo "<p>ไม่อนุญาตให้ใส่ html tag ในหัวข้อกระทู้</p>";
    return;
}

if (strlen($data) < 6 || strlen($title) > 2000) {
    echo "<p>กรุณาใส่กระทู้ตั้งแต่ 6 ตัวอักษร ถึง 2000 ตัวอักษร</p>";
    return;
}

echo "<h3>หัวข้อกระทู้ : " . htmlspecialchars($title) . "</h3>";
echo "<div>กระทู้ : " . $data . "</div>";
