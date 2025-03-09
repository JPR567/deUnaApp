
const QrCode = () => {
    
    const qrImage =
      "data:image/png;base64,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Btegcki4Ioryzdmnqn6KvUQbOKv+TA5qNtZeBtegcki4Ioryzdmnqn6KvUQbOKv+TA5qNtZeBtfAJKpwoBQxrXKyoKQaqfL1uG5y1kcqEFbQYVRRUo08ikW1bnLWRyoQVtBhVFFSjTyKRbVuctZHKhBW0GFUUVKNPIpFtW5y1kcqEFbQYVRRUo08ikW1bnLWRyoQVtBhVFFSjTyKRbVuctZHKhBW0GFUUVKNPIpFtW5y1kcqihOWxcFZNJpVk24a46ijjqoefvjh6t13362+//77UdYccy8eh9yjWJKzGrXmahIVYYUV1rHHHltt2LCh+vPPP0dbE2EhrL4gLMO9RBSWgnPPPRdhIaxeICzDvSCs//PFF19UBx10EMIyIDmrUWuuJlERFsJq4L///qvWr1+PsCYmOatRa64mUREWwmph48aN1Y477oiwJiI5q1FrriZRERbC6uCHH36o9thjD4Q1AclZjVpzNYnqdMi9Xar6RuGXX36p1q1bN/h5q3OxWLcNqx5UgLAcX6r6RvtOayhW52KxbhtWPagAYTm+VPWdF6zOxWLdNqx6UAHCcnyp6jsvWJ2LxbptWPWgAoTl+FLVV83XX39dvfjiiyuujz/+eMWPe5vf8+qrr46Wh9W5WKzbhlUPKkBYji9VfdXccMMNjXEfeeSRpXvq9x7Wb/PZ/J4jjzxytDyszsVi3TaselABwnJ8qeqr5sQTT2yMW79J+ssvv6yuvfbaarfddmu857LLLhstD6tzsVi3DaseVICwHF+q+qpfrb7LLrusiFm/EPSff/6p7r777tbcnnjiidFysToXi3XbsOrBuRHW0OdynrXYizKnrpj1j2MKPvroo8a9HHfccb3e6Lz577maqD/WRt0rOXgTYQompTYQ1pwK6+WXX85+s/J9991XXXPNNdVDDz1U/fzzzwv/Xn+H1LSXK6+8cuHrBx544Kr7rb8zq79D66L+5TzCSghr0sAIS5pTV8yhn2f1008/VZdcckm17bbbLst19913r957773q8ssvb9zLU089tfD8jz/+WN17772N95xwwgm9cvjjjz8QVkJY0wZGWNKc2jjiiCMGPff5559XBx988Kr57r///tXhhx/e+LVPP/10aZ1LL7208Z7rr79+TXtAWAlhTRYYYUlzamPTlxf0pf6RrxbSkIHYddddl6112GGHNd737LPP9s7ngQceQFgJYU0XGGFJc2qjfnnBWjn11FMHD8TJJ5+87Me5zX+cXLy++eab3vm88847CCshrOkCIyxpTm2s9Q9GPPPMM435bbnlltXtt99effLJJ9V555236j5uuummpbXefPPNxnv22muvNeX07bffIqyEsKYLbCAPC7GoBDtVE/7999/Vfvvt1xjjtttuWybBLbbYovG+5557bum+u+66q/GeM888c015/fXXX9JeGfpc9PPeHG+iQ1gIq5Wnn366cf0DDjhgQWabsv3226+4r5bYd999t3TPOeec07he/Z3aWvj3338RVkJY0wVGWCEa+JRTTmlcv/6l9+Yvd2i6b++9915237777tt43+uvv77m3BBWQliTBUZY7hu4fs3UNtts0/i7q/prm/LKK6805nH22Wd3/ti41VZbVb/99tua80NYCWFNFhhhuW/g559/vnHtpk9UuOWWWxrvvfPOO5fuqX+X1XTPIYccsubc+JEwIaxJAyMs9w1c/+9e3xd4nnHGGY33vvHGG0v33HjjjY33XHTRRWvOjV+6J4Q1aWCE5b6B6/+5a1r7hRdeWHHvnnvu2fij3u+//750z0knndS4Xv1exLXS52UNXXg7F+vzbgJhZRLtUFUNnJNT3xeOHn/88Y3Pf/jhh8vuq1/w2XTfoYceuuy++hXvOfms9YWjOahqH012CWHlgbDyh6bvW3Nq4TQ9/+uvv/Z66cOFF164dE/94tKmexY/J2ut9HlrTg4IawbCygRh5Q9N3zc/N73Reeutt15x32qvrTr//POX7nnyyScb7xn6uVyL70dUgbBmIKxMENY4Q9Pn42WOOeaYxmfrjzle5P3331+Q2Gpxbr755oX73n777YXvija/hvzRib4fL5MDwpqBsDJBWOMMzYYNGzrXuOCCCxqfvfjiixd+mV6/L3CfffZpjfPggw8ue3Fp/QcqzjrrrAVZ1S9NGEL9S3+E5b8HFSAsxzkph+boo4/uXOOxxx5b9fnV3je4+VX/crymltOmH21cX1dffXU1hL4fkZwDwpqBsDJBWOMNTf0xx23U3xHttNNOnevU/5u43Xbbrfj3HXbYYen9hvX/BG7+9Z133nmNla6qzz77zPxMc55FWHkU9zqskppQnU+fT0i4//77W9eo3ytYv+Xm1ltvXfG1+ndgi3zwwQcrvl5/rLLXM7XIKZrM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";
  
      
    return (
      <div className="qr">
        <img src={qrImage} alt="QR Code" />
      </div>
    );
  };
  
  export default QrCode;
  
 