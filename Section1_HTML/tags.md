- Thẻ a <a href =""></a>
    Thẻ neo hoặc là một cái siêu đường dẫn, dùng để dẫn một URLs bên ngoài hoặc là dẫn vào một cái section trong page nào đó
    EX: <a href="https://www.w3schools.com">Visit W3Schools</a>

- Thẻ body <body></body>
    Thẻ document's body is required

- HTML Khối
    Phần tử cấp khối luôn bắt đầu trên một dòng mới và trình duyệt sẽ tự động thêm một số khoảng trắng (lề) trước và sau phần tử
    Nội tuyến không bắt đầu trên một dòng mới va chỉ chiếm đủ chiều rộng nếu cần thiết

    div <div></div> - Defines a section in a document (block-level)
        LÀ một khối của page sử dụng để bố trí các thành phần của thiết kế, thường được dùng để làm vùng cho các phần tử HTML khác
        Nổi cạnh nhau: float, display: inline-block || display: flex
    
    span <span></span> - Defines a section in a document (inline)
        Là một vùng chứa nội tuyến được sử dụng để đánh dấu một phần của văn bản hoặc một phần của tài liệu

- Thẻ form <form></form >
    Dùng để bao các trường nhập vào

- h1, h2, h3, h4 <h1></h1>
    Tiêu đề tùy theo độ lớn 

Những tiêu đề tùy theo độ lớn của văn bản
    - head <head></head>
        Thông báo về page đó. Chứa những thẻ meta, khai báo về file css, thư viện, JS
        <meta>: siêu tag, các khai báo của page (sd tiếng Việt), viewport - thu phóng
        <title>: tên page đó

- HTML images <img src = "" alt = "">
    Display image
    src: Đường dẫn đến hình ảnh
    alt: Chỉ đinh văn bản thay thế cho hình ảnh

    EX: <img src="img_girl.jpg" alt="Girl with a jacket">
        <img src="img_girl.jpg" width="500" height="600">

- Thẻ input
    type = text, number, checkbox

- Thẻ Danh sách <li></li>
    <li>
        <ol></ol>
        <ul></ul>
    </li>
    Liệt kê danh sách các item trong một danh sách (ul or ol tag)
    <ul></ul>: danh sách không có thứ tự
    <ol></ol>: danh sách có thứ tự
    <li></li>: mỗi mục danh sách bắt đầu 

    <dl>: xác định danh sách mô tả
    <dt></dt>: xác định thuật ngữ 
    <dd></dd>: mô tả thuật ngữ

- Thẻ link: dẫn đến một đường dẫn file bên ngoài

- Thẻ meta: seo

- Thẻ select - option

- HTML Đoạn Văn
    <p> tag xác định đoạn văn
    <hr> tag đoạn ngắt của đoạn văn
    <br> tag xuống dòng
    <pre> tag in theo đúm format nhập vào

- HTML Formatting
    <b></b>: Chữ in đậm
    <strong>: Quan trọng
    <i>: Văn bản in nghiêng
    <em></em>: Đoạn văn bản nhấn mạnh
    <mark>: Văn bản đánh dấu
    <small>: Văn bản nhỏ hơn
    <del>: Văn bản đã xóa
    <ins>: Đã chèn văn bản
    <sub>: Văn bản đăng ký
    <sup>: Văn bản siêu chữ

- HTML Quotations
    <abbr>: Định nghĩa một từ viết tắt hoặc từ viết tắt
    <address>: Xác định thông tin liên hệ của tác giả/chủ sở hữu tài liệu
    <bdo dir = "rtl">: Xác định hướng văn bản
    <blockquote cite ="">: Xác định một phần được trích dẫn từ một nguồn khác
    <cite>: Xác định tên tác phẩm
    <q>: Xác định một trích dẫn nội tuyến ngắn

- HTML comment
    Syntax: <!-- Write your comments here -->

- HTML Color
    background_color: <p style="background-color:Tomato;">Lorem ipsum...</p>
    color_text: <h1 style="color:Tomato;">Hello World</h1>
    color_border: <h1 style="border:2px solid Tomato;">Hello World</h1>

    value_color: 
        <h1 style="background-color:rgb(255, 99, 71);">...</h1>
        <h1 style="background-color:#ff6347;">...</h1>
        <h1 style="background-color:hsl(9, 100%, 64%);">...</h1>

        <h1 style="background-color:rgba(255, 99, 71, 0.5);">...</h1>
        <h1 style="background-color:hsla(9, 100%, 64%, 0.5);">...</h1>

- HTML CSS
    Nội tuyến: bằng cách sử dụng stylethuộc tính bên trong các phần tử HTML

    Nội bộ: bằng cách sử dụng một <style> phần tử trong <head> phần

    Bên ngoài: bằng cách sử dụng một <link> phần tử để liên kết đến tệp CSS bên ngoài - <link rel="stylesheet" href="styles.css">

- HTML Liên kết
    _self: mở tài liệu trong cùng cửa sổ tab
    _blank: mở tài liệu trong cửa sổ hoặc tab mới
    _parent: mở tài liệu trong khung cha
    _top: mở tài liệu chế độ toàn màn hinh

    EX: <a href="https://www.w3schools.com/" target="_blank">Visit W3Schools!</a>

- HTML favaicon - <link rel="icon" type="image/x-icon" href="/images/favicon.ico">

- HTML title <title></title>

- HMTL table
    Ô bảng: <td></td>
    Hàng bảng: <tr></tr>
    Tiêu đề bảng: <th></th>

    Chú thích bảng: <caption></caption> dùng ngay sau <table> tags
    ColorGroup: <colgroup><col></colgroup> 
        EX: <colgroup>
                <col span="2" style="background-color:red">
                <col style="background-color:yellow">
            </colgroup>

    Color: <col> Chỉ định thuộc tính cột cho mỗi cột trong phần tử <colgroup>

    <tbody></tbody>: Nhóm nội dung nội dung trong một bảng
    <tfoot></tfoot>: Nhóm nội dung chân trang trong một bảng

- CLASS && ID
    .name_Class{}
    #name_id{}

    Một class có thể sử dụng bởi nhiều phần tử HTML
    Một id chỉ được sử dụng bởi một phần tử HTML



