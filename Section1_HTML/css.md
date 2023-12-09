---------------------CSS tutorial---------------------

1. CSS internal style
    - Defined inside the <style> element, in head section
    <style>
        body {
            background-color: linen;
        }

        h1 {
            color: maroon;
            margin-left: 40px;
        }
    </style>

2. CSS external style
    - HTML page must include a reference to external CSS inside <link> element, in the head section
    <link rel="stylesheet" href="./nameCSS.css">

3. CSS inline style
    - Apply a unique style for a single element
    <h1 style="color:blue;text-align:center;">This is a heading</h1>
    <p style="color:red;">This is a paragraph.</p>

4. CSS selectors (5 loại: simple, combinator, pseudo-class, pseudo-element, attribute)
    - CSS element selector: (element || element, element) chọn các phần tử HTML dựa trên tên của phần tử (tag name)
    - CSS id selector: (#firstname) id của 1 phần tử là duy nhất
    - CSS class selector: (.classname) chọn các phần tử thuộc một lớp cụ thể
    - CSS Universal selector: (*) chọn tất cả các thành phần HTML
    - CSS grouping selector: chọn all các thành phần HTML có cùng định nghĩa 

5. CSS comment /**/

6. CSS color
    - CSS background color: backround-color: namecolor;
    - CSS text color: color: namecolor;
    - CSS border color
    - CSS color values: RGB, HEX, HSL, RGBA, HSLA

7. CSS background
    - background-color
        - background-color: namecolor;
        - opacity (độ mờ) / transparency (độ trong suốt) 0.0 - 1.0
    - background-image
    - background-repeat
        - background-repeat: repeat-x; (lặp lại theo chiều ngang)
        - background-repeat: repeat-y; (lặp lại theo chiều dọc)
        - background-repeat: no-repeat;
    - background-attachment: chỉ định hình nền sẽ cuộn hay không
        - background-attachment: fixed;
        - background-attachment: scroll;
    - background-position xác định vị trí nền
        - background-position: right top;
    - backgound :
        - background-color
        - background-image
        - background-repeat
        - background-attachment
        - background-position

8. CSS Border
    - CSS Border Style: border-style
    - CSS Border Width: 
        + border-width: num;
        +  border-width: top right bottom left;
    - CSS border color:
        + border-color: colorname;
        +  border-color: top right bottom left;
    - CSS border side:
        + border-top-style
        + border-right-style
        + border-bottom-style
        + border-left-style
    - border
        + border: border-width border-style border-color
        + border-left:
        + border-bottom:
    - Border rounded
        + border-radius

9. CSS margin
    - Lề được sử dụng để tạo không gian xung quanh các phần tử, bên ngoài bất kì đường viền nào
    - Margin: 
        + margin-top
        + margin-right
        + margin-bottom
        + argin-left
    
10. CSS padding
    - Tạo khoảng trống xung quanh nội dung của phần tử, bên trong bất kì đường viền nào
    - Padding:
        + padding-top
        + padding-right
        + padding-bottom
        + padding-left

11. CSS Height, Width and Max-width
    - CSS height and width để đặt chiều vao và chiều rộng của một phần tử
    - CSS max-width chiều rộng tối đa của một phần tử (bé hơn thì sẽ display phù hợp)

12. CSS Box Model
    - Content - Nội dung của hộp, nơi văn bản và hình ảnh xuất hiện
    - Padding - Xóa một khu vực xung quanh nội dung. Phần đệm trong suốt
    - Border - Đường viền bao quanh phần đệm và nội dung
    - Margin - Xóa một khu vực bên ngoài đường viền. Lề trong suốt

13. CSS Text
    - Color text: color:namecolor;
    - Text alignment
        + text-align: center || left || right ||justify; căn chỉnh chiều ngang của văn bản 
        + text-align-last: căn chỉnh dòng cuối cùng của văn bản
        + vertical-align: baseline || text-top || text-bottom || sub || super; căn chỉnh theo chiều dọc
    - Text decoration
        + text-decoration-line
        + text-decoration-color
        + text-decoration-style
        + text-decoration-thickness (độ dày)
        + text-decoration
    - Text transformation
        + text-tranform: uppercase || lowercase || capitalize (in hoa chữ cái đầu);
    - Text space
        + text-indent (thụt lề văn bản)
        + letter spacing
        + line-height
        + word-spacing
        + white-space
    - Text shadow: bóng văn bản
        + text-shadow: h-shadow v-shadow blur-radius color|none|initial|inherit;

14. CSS Font
    - font-family
    - Font Wed safe: Arial (sans-serif), Verdana (sans-serif), Tahoma (sans-serif), Trebuchet MS (sans-serif), Times New Roman (serif), Georgia (serif), Garamond (serif), Courier New (monospace), Brush Script MT (cursive)
    - Font dự phòng: Serif, sans-serif, monospace, cursive, fantasy
    - font-style: normal || italic || oblique;
    - font-weight: normal || bold ||initial;
    - font-variant
    - font-size
    - Google font: <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia">

15. CSS ICon
    - Font Awesome icons: <script src="https://kit.fontawesome.com/yourcode.js" crossorigin="anonymous"></script>
    - Bootstrap icon: <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    - Google icon: <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

16. CSS links
    - 4 trạng thái liên kết:
        + a:link - một liên kết bình thường, chưa được truy cập
        + a: visited: một liên kết người dùng truy cập
        + a:hover: một liên kết người dùng di chuột qua
        + a: active: một liên kết ngay khi nó được nhấp nào
    EX:/* unvisited link */
            a:link {
                color: red;
            }

        /* visited link */
            a:visited {
                color: green;
            }

            /* mouse over link */
            a:hover {
                color: hotpink;
            }

            /* selected link */
            a:active {
                color: blue;
            }

17. CSS List
    - In HTML, có 2 loại list:
        + Unordered list <ul></ul> - được đánh dấu bằng dấu đầu dòng
        + Ordered list <ol></ol>   - được đánh dấu bằng số hoặc chữ cái
    
    - CSS list:
        + Đặt các điểm đánh dấu mục danh sách khác nhau cho <ol>
        + Đặc các điểm đánh dấu mục danh sách khác nhau cho  <ul>
        + Đặt img cho điểm đánh dấu mục danh sách
        + Thêm background-color vào danh sách và mục danh sach

    - CSS list properties:
        + list-style-type: chỉ loại điểm đánh dấu mục danh sách
            + + list-style-type: circle;
            + + list-style-type: square;
            + + list-style-type: upper-roman;
            + + list-style-type: lower-alpha;
            + + list-style-type: none;

        + list-style-image: chỉ định một hình ảnh làm điểm đánh dấu mục danh sách
            Ex: list-style-image: url('sqpurple.gif');

        + list-style-position: chỉ định vị trí của các điểm đánh dấu mục danh sách
            + + list-style-position: outside; (default)
            + + list-style-position: inside;

        + Thuộc tính viết tắt - list-style
            + + list-style: list-style-type list-style-position list-style-image;
18. CSS Table
    - Chú thích bảng: caption-side: top || bottom;
    - Đường viền bảng: border
        - border: border-width border-style border-color;
        /*----border-style: solid || dotted || dashed || inset || outset || ridge || groove || double ||none || hidden----*/
        - border-spacing: width height;

    - Kích thước chiều rộng đầy đủ và chiều cao
        - height: num;
          width: 100%

    - Thu gọn viền bảng: border-collapse
        - border-collapse: collapse || separate;

    - Căn chỉnh bảng
        - Căn chỉnh theo chiều ngang
              + text-align: center || left || right;
        - Căn dọc
              + vertical-align: middle || top || bottom;

    - Kiểu bảng:
        - Table padding
            + padding cho <td></td> và <th></th>
        - Horizontal Dividers - giải phân cách ngang
            + border-bottom: width style color;
        - Hoverable Table :hover đánh dấu table rows khi di chuột tới
            EX: tr:hover {background-color: red;}
        - Striped Tables nth-child()
            EX: tr:nth-child(even) {background-color: red;}
        - Table color
          
    - Table responsive
        - Hiển thị thanh cuộn nếu màn hình nhỏ thì thêm style="overflow-x:auto; vào <div></div> chứa table

19. CSS display
    - ***Block*** *<div>, <h1> - <h6></h6>, <p></p>, <form>, <header>, <footer>, <section>*
          - Luôn được xuống dòng
          - Chiếm toàn bộ width nếu width không được set
    - ***Inline*** *<span>, <a>, <img>*
          - Nằm trên cùng một dòng. Nếu các items vượt quá độ dài của dòng thì item sẽ xuống dòng mới
          - Không thể set width và height
          - Có thể điều chỉnh margin và padding left and right (top và bottom thì không thể).
    - ***Inline-block***
          - Được sắp xếp giống inline nằm trên cùng một dòng
          - Nhưng có thể set width, height, margin, padding đủ 4 hướng
    - ***None*** || visibility: hidden;

20. CSS Layout - The position property
    - Có 5 giá trị chính của `position`
    - position: 
        - static (default)
            + Kiểu mặc định, các element sẽ được sắp xếp vị trí một cách như bình thường trên trang web
        - relative
            + Vị trí mới của một element tương quan/ liên hệ tới vị trí mặc định của nó.
            + Không ảnh hưởng tới vị trí của các element khác.
        - fixed
            + Vị trí của chúng CHỈ tương quan với thẻ <html>
            + Không bị ảnh hưởng bới scroll
        - absolute
            + Sẽ dịch chuyển vị trí của nó tương ứng với thẻ cha của nó.
            + Vị trí mặc định điểm bắt đầu (top-left) của element cha
        - sticky: định vị dựa trên vị trí cuộn

22. CSS Z-index
    - Element càng ở bên trên thì `z-index` của nó càng cao
    - Chỉ định ngăn xếp của một phần tử (+ or -)

24. CSS Overflow
    - Cắt nội dung hay thêm thanh cuộn khi nội dung của một phần tử quá lớn để vừa với khu vực được chỉ định
    - overflow: visible || hidden || scroll || auto;
    - overflow-wrap: normal || anywhere || break-word; (ngắt dòng nếu tràn viền)
    - ovverflow-x: visible || hidden || scroll || auto;
    - overflow-y

25. CSS Layout - float and clear
    - float: left || right || none || inherit;

26. CSS combinator
    - Giải thích mỗi quan hệ giữa các bộ chọn
    - Có 4 tổ hợp khác nhau trong CSS:
        + Bộ con cháu (space)
        + Bộ chọn con (>)
        + Bộ chọn anh chị em liền kề (+)
        + Bộ chọn anh chị em chung (~)

27. CSS Pseudo-class (link: https://www.w3schools.com/css/css_pseudo_classes.asp)
    - :link, :visited, :hover, :active
    - :first-child, :last-child, :last-of-type, :ntd-child(n), ....

28. CSS Navigation Bar
    - Thanh điều hướng = danh sách liên kết
    - Nav dọc
    - Nav ngang

29. CSS Dropdowns

30. CSS Attr Selector (link: https://www.w3schools.com/css/css_attribute_selectors.asp)
    - CSS [attribute] selector. EX: a[targer]
    - CSS [attribute = 'value']. EX: a[target = "_blank"]


---------------------CSS advanced---------------------

1. CSS Rounded corners
    - CSS border-radius xác định bán kính các góc của phần tử
    - border-radius để thiết lập 4 thuộc tính sau:
        + border-top-left-radius
        + border-top-right-radius
        + border-bottom-right-radius
        + border-bottom-left-radius

2. CSS border imgaes
    - CSS border-image chỉ định một hình ảnh sẽ được sử dụng để làm đường viền
    - border-image:     
        + border-image-source
        + border-image-slice: num;
        + border-image-width: num;
        + border-image-outset: lengthnum;
        + border-image-repeat: stretch|repeat|round|space|num;

3. CSS background
    - CSS background-image cho phép thêm nhiều hình nền cho một phần tử, các hình nền phân cách nhau bởi dấu phẩy
        + background-image: src_pic1, src_pic2;
        + background: src_pic1 background-position background-repeat, src_pic2 background-position background-repeat;

    - CSS background-size cho phép chỉ định kích thước của hình nền, chấp nhận nhiều giá trị cho kích thước nền với nhiều nền và ngăn cách bởi dấu phẩy
        + background-size: contain cover;
            + + contain: tỷ lệ hình nền cả về height và width
            + + cover: tỷ lệ hình nền sao cho bao phủ toàn bộ nội dung (bao phủ toàn bộ)

    - CSS background-origin chỉ định vị trí của nền
        + background-origin: border-box | padding-box | content-box;

    - CSS background-clip chỉ định vùng vẽ nền
        + background-clip: border-box | padding-box | content-box;

4. CSS Color - Opacity, HSL, HEX, HSLA, RGBA
    - transparent: sử dụng để làm cho màu trong suốt
    - curentcolor: chứa giá trị hiện tại của thuộc tính màu của 1 phần tử
    - inherit: một thuộc tính sẽ kế thừa giá trị từ phầ tử cha của nó

5. CSS Gradients
    - CSS Linear Gradients:
        + background-image: linear-gradient(direction, color, color, ..);
            + + direction: goes down/up/left/right/diagonally
        + background-image: repeating-linear-gradient();
        + background-image: radial-gradient();
        + background-image: conic-gradient();

6. CSS 2D Transforms
    - CSS cho phép di chuyển, xoay, chia tỷ lệ và nghiêng các phần tử
    - CSS 2D transform:
        + translate(num, num);
        + rotate(numdeg). EX: Xoay 20deg rotate(20deg);
        + scaleX(num)
        + scaleY(num)
        + scale(num, num)
        + skewX(numdeg)
        + skewY(numdeg)
        + skew(numdeg, numdeg)
        + matrix(scaleX(), skewY(), skewX(),scaleY(), TranslateX(), TranslateY())

7. CSS 3D Transforms

8. CSS Transitions
    - Cho phép thay đổi giá trị thuộc tính một cách trơn tru trong một khoảng thời gian nhất định
    - Syntax transition: thuộctính time;
    - transition-timing-function: 
        + ease: khởi đầu chậm, nhanh, rồi kết thúc chậm
        + linear: cùng tốc độ
        + ease-in: khởi đầu chậm
        + ease-out: kết thúc chậm
        + ease-in-out: bắt đầ và kết thúc chậm
        + cubic-bezier(n,n,n,n)
    - transition-delay: n-time;
    - Transition + Transformation - transition: width 2s, height 2s, transform 2s;
    - transition-duration (time sẽ hoàn thành hiệu ứng)
    - transition-property (tên thuộc tính mà hiệu ứng chuyển tiếp dành cho)

9. CSS Animations
    - @keyframes
    - animation-name
    - animation-duration
    - animation-delay
    - animation-iteration-count
    - animation-direction
    - animation-timing-function
    - animation-fill-mode
    - animation

10. CSS Media Queries
    @media not|only mediatype and (expressions) {
        CSS-Code;
    }

11. CSS Flexbox
    - Đây là một flex container 
    - Linh hoạt bằng cách đặt display: flex;
    - Thuộc flex tính là thuộc tính viết tắt của các thuộc tính 
        + flex-grow: kích thước của một mục linh hoạt so với các mục linh hoạt còn lại
        + flex-shrink: mức thu nhỏ của một mục linh hoạt so với các mục linh hoạt còn lại
        + flex-basis: chỉ định độ dài ban đầu của một mục linh hoạt
    
    - Vùng chứa CSS Flex:
        + flex-direction: xác định hướng mà vùng chứa muốn sắp xếp
            + flex-direction: column; (xếp chồng các mục linh hoạt theo chiều dọc từ trên xuống)
            + flex-direction: column-reverse; (xếp chồng theo chiều dọc từ dưới lên)
            + flex-direction: row; (ngang, từ trái sang phải)
            + flex-direction: row-reverse; (ngang, phải sang trái)

        + flex-wrap: tính chỉ định các mục linh hoạt có bọc hay khôngflex-wrap: wrap;
            + flex-wrap: nowrap;
            + flex-wrap: wrap-reverse;

        + flex-flow: flex-direction + flex-wrap;
            Ex: .flex-container {
                    display: flex;
                    flex-flow: row wrap;
                }

        + justify-content: căn chỉnh các mục linh hoạtjustify-content: center;
            + justify-content: flex-start;
            + justify-content: flex-end;
            + justify-content: space-around;
            + justify-content: space-between;

        + align-items: căn chỉnh các mục linh hoạt
            + align-items: center;
            + align-items: flex-start;
            + align-items: flex-end;
            + align-items: stretch;
            + align-items: baseline;

        + align-content: căn chỉnh các đường flex
            + align-content: space-between;
            + align-content: space-around;
            + align-content: stretch;
            + align-content: center;
            + align-content: flex-start;
            + align-content: flex-end;

---------------------CSS Responsive---------------------
1. RWD Intro
    - Đáp ứng trang web trong đẹp mắt trên tất cae các thiết bị
    - Mang lại trải nghiệm tốt

2. RWD Viewport
    - Là khu vực hiển thị của người dùng trên trang web.
    - HTML5 cho phép kiểm soát khung hình qua thẻ meta
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

3. RWD Grid View
    - Grid View thường có 12 cột và tổng chiều rộng là 100%
    - Tỷ lệ % của 1 cột 100%/12 = 8,33%
    - Tạo class="col-"

4. RWD Media Queries
    - Sử dụng @media 
    - Orientation: Portrait / Landscape (chế độ ngang)
    @media only screen and (orientation: landscape) {
  body {
    background-color: lightblue;
  }
}

    /* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {...}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {...}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {...}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {...}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {...}

5. RWD Images
    - Use width 
        + Nếu width được đặt % và height: auto thì hình ảnh sẽ tăng tỷ lệ lên xuống

    - Use max-width
        + Nếu max-width:100% thì img sẽ giảm tỷ lệ nếu cần và không bh vượt quá kích thước ban đầu

    - Background img
        + background-size: contain; (MQH width:height cố gắng vừa với content)
        + background-size: 100% 100%; (hình nền sẽ kéo dài để bao phủ toàn bộ khu vực nội dung)
        + background-size: cover; (bao phủ toàn bộ khu vực nội dung nhuwnh nền có thể bị cắt bớt)

    - Hình ảnh khác nhau cho các thiết bị @media
    - HTML <picture></picture>
    
6. RWD Videos
7. RWD Frameworks/ Templetes


4. CSS Grid
    - CSS Grid - bố cục lưới: hệ thống bố cục lưới, với các Grid columns - columns: các đường thẳng đứng của các mục và Grid rows - rows: các đường ngang của các mục grid

    - Bố cục gồm: 1 cha với 1 hoặc nhiều phần tử con

    - Display property:
        + display: grid (cân đối)
        + display: inline-grid (hẹp)

    - CSS Gird:
        +, Grid gaps - gaps: khoảng cách giữa mỗi cột/hàng (column-gap, row-gap, gap)

        /* Grid Lines: grid-row-start, grid-row-end, grid-column-start, grid-column-end */
        +, grid-column: xác định cột nào sẽ đặt một mục
            +, grid-column: grid-column-start / grid-column-end;
                (1/5: bắt đầu trên cột 1 và kết thúc trước cột 5, 1/span 3: bắt đầu trên cột 1 và kéo dài 3 cột)
            +, grid-column-start: num;
            +, grid-column-end: num;

        +, grid-row: xác định hàng nào sẽ đặt một mục
            +, grid-row: grid-row-start / grid-row-end;
            +, grid-row-start: num;
            +, grid-row-end: num;

        +, grid-template-columns: xác định số lượng cột trong bố cục lưới và có thể xác định chiều rộng  của mỗi cột
            Ex: .grid-container {
                    display: grid;
                    grid-template-columns: auto auto auto auto; /*4 cột tự động*/
                    grid-template-columns: 80px 200px auto 40px auto; /*5 cột với width*/
                }

        +, grid-template-rows: xác định chiều cao của mỗi hàng
            Ex: .grid-container {
                    display: grid;
                    grid-template-rows: 80px 200px;
                }

        +, justify-content: căn chỉnh toàn bộ lưới bên trong cùng chứa (tổng width của lưới < chiều rộng của vùng chứa)
            +, justify-content: space-evenly;
            +, justify-content: space-around;
            +, justify-content: space-between;
            +, justify-content: center;
            +, justify-content: start;
            +, justify-content: end;

        +, align-content: thuộc tính căn chỉnh nội dung theo chiều dọc toàn bộ lưới bên trong vùng chứa
            +, align-content: center;
            +, align-content: space-evenly;
            +, align-content: space-around;
            +, align-content: space-between;
            +, align-content: start;
            +, align-content: end;
        
        +, grid-area: viết tắt cho grid-row-start, grid-column-start, grid-row-endvà grid-column-end


Syntax:

selector{
    propety: value;
    property2: value2;
}
display: flex;
justify-content sắp xếp các hạng mục theo chiều ngang
    - flex-start: sắp xếp về phía bên trái của hộp
    - flex-end: sắp xếp về phía bên phải của hộp chứa
    - center: ở chính giữa của hộp chứa
    - space-between: khoảng cách bằng nhau giữa chúng
    - space-around: khoảng cách bằng nhau xung quanh chúng

align-items sắp xếp các hạng mục theo chiều dọc
    - flex-start: sắp xếp phía trên
    - flext-end: sắp xếp phía dưới cùng
    - center
    - baseline: hiển thị đường cơ bản của hộp
    - stretch: kéo dài để phù hợp với hộp chứa

flex-direction xác định hướng vật được đặt trong hộp
    - row: cùng hướng với hộp
    - row-reverse: ngược hướng với hướng trong văn bản
    - column: đặt từ trên xuống dưới
    - column-reverse: đặt từ dưới lên trên


