<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$street = $_POST['street'];
$house = $_POST['house'];
$block = $_POST['block'];
$flat = $_POST['flat'];
$level = $_POST['level'];
$comments = $_POST['comment'];
$pay = $_POST['pay_option'];
$callback = $_POST['dont_disturb'];
$callback = isset($callback) ? 'Нет' : 'Да'; 

$mail_message = '
    <html>
        <head>
            <title>Заявка</title>
        </head>
        <body>
            <h2>Заказ</h2>
            <ul>
                <li>Имя: ' . $name . '</li>
                <li>Мобильный телефон: ' . $phone . '</li>
                <li>Улица: ' . $street . '</li>
                <li>Дом: ' . $house . '</li>
                <li>Корпус: ' . $block . '</li>
                <li>Квартира: ' . $flat . '</li>
                <li>Комментарии к заказу: ' . $comments . '</li>
                <li>Способ оплаты: ' . $pay . '</li>               
                <li>Нужно ли перезванивать клиенту: ' . $callback . '</li>
            </ul>
        </body>
    </html>    
    ';

$headers = "From: Администратор сайта <admin@loftschool.com>\r\n".
    "MIME-Version: 1.0" . "\r\n" .
    "Content-type: text/html; charset=UTF-8" . "\r\n";
$mail = mail('shabalinastya@gmail.com', 'Заказ', $mail_message, $headers);
$data = [];
if ($mail) {
    $data['status'] = "OK";
    $data['mes'] = "Письмо успешно отправлено";
}else{
    $data['status'] = "NO";
    $data['mes'] = "На сервере произошла ошибка";
}
echo json_encode($data);
echo ('here');
    

?>