function equalTo24(a,b,c,d){

  const aCopy = a;
  const bCopy = b;
  const cCopy = c;
  const dCopy = d;

  var not = "It's not possible!";

  var arr4 = [
    a + b + c + d,
    a * b * c * d
    ]

  var arrMin = [
    a - b - c - d
    ]


    for (let i = 0; i < 12; i++) {

        if (i === 0) {
          a = aCopy;
          b = bCopy;
          c = cCopy;
          d = dCopy;
          if (check3(a,b,c,d).length > 0) {
            return check3(a,b,c,d);
          }
          if (check2(a,b,c,d) === 24) {
            return check2(a,b,c,d);
          }
        } else if (i === 1) {
          a = aCopy;
          b = cCopy;
          c = bCopy;
          d = dCopy;
          if (check3(a,b,c,d).length > 0) {
            console.log("HERE");
            return check3(a,b,c,d);
          }
          if (check2(a,b,c,d) === 24) {
            return check2(a,b,c,d);
          }
        } else if (i === 2) {
          a = aCopy;
          b = dCopy;
          c = cCopy;
          d = bCopy;
          if (check3(a,b,c,d).length > 0) {
            return check3(a,b,c,d);
          }
          if (check2(a,b,c,d).length > 0) {
            return check2(a,b,c,d);
          }
        } else if (i === 3) {
          a = bCopy;
          b = cCopy;
          c = dCopy;
          d = aCopy;
          if (check3(a,b,c,d).length > 0) {
            return check3(a,b,c,d);
          }
          if (check2(a,b,c,d).length > 0) {
            return check2(a,b,c,d);
          }
        } else if (i === 4) {
          a = bCopy;
          b = dCopy;
          c = cCopy;
          d = aCopy;
          if (check3(a,b,c,d).length > 0) {
            return check3(a,b,c,d);
          }
          if (check2(a,b,c,d).length > 0) {
            return check2(a,b,c,d);
          }
        } else if (i === 5) {
          a = bCopy;
          b = aCopy;
          c = dCopy;
          d = cCopy;
          if (check3(a,b,c,d).length > 0) {
            return check3(a,b,c,d);
          }
          if (check2(a,b,c,d).length > 0) {
            return check2(a,b,c,d);
          }
        } else if (i === 6) {
          a = cCopy;
          b = dCopy;
          c = aCopy;
          d = bCopy;
          if (check3(a,b,c,d).length > 0) {
            return check3(a,b,c,d);
          }
          if (check2(a,b,c,d).length > 0) {
            return check2(a,b,c,d);
          }
        } else if (i === 7) {
          a = cCopy;
          b = aCopy;
          c = bCopy;
          d = dCopy;
          if (check3(a,b,c,d).length > 0) {
            return check3(a,b,c,d);
          }
          if (check2(a,b,c,d).length > 0) {
            return check2(a,b,c,d);
          }
        } else if (i === 8) {
          a = cCopy;
          b = bCopy;
          c = aCopy;
          d = dCopy;
          if (check3(a,b,c,d).length > 0) {
            return check3(a,b,c,d);
          }
          if (check2(a,b,c,d).length > 0) {
            return check2(a,b,c,d);
          }
        } else if (i === 9) {
          a = dCopy;
          b = aCopy;
          c = bCopy;
          d = cCopy;
          if (check3(a,b,c,d).length > 0) {
            return check3(a,b,c,d);
          }
          if (check2(a,b,c,d).length > 0) {
            return check2(a,b,c,d);
          }
        } else if (i === 10) {
          a = dCopy;
          b = bCopy;
          c = aCopy;
          d = cCopy;
          if (check3(a,b,c,d).length > 0) {
            return check3(a,b,c,d);
          }
          if (check2(a,b,c,d).length > 0) {
            return check2(a,b,c,d);
          }
        } else if (i === 11) {
          a = dCopy;
          b = cCopy;
          c = bCopy;
          d = aCopy;
          if (check3(a,b,c,d).length > 0) {
            return check3(a,b,c,d);
          }
          if (check2(a,b,c,d).length > 0) {
            return check2(a,b,c,d);
          }
        }
      }

     // return not;

}


function check3(a,b,c,d) {



  var arr3 = [
    [b + c + d, "(b+c+d)"],
    [b - c - d,"(b-c-d)"],
    [b * c * d,"(b*c*d)"],
    [b / c / d,"(b/c/d)"],

    [b + c - d,"(b+c-d)"],
    [b - c + d,"(b-c+d)"],
    [b + c / d,"(b+c/d)"],
    [b / c + d,"(b/c+d)"],

    [b + c * d,"(b+c*d)"],
    [b * c + d,"(b*c+d)"],
    [b / c - d,"(b/c-d)"],
    [b - c / d,"(b-c/d)"],

    [b * c - d,"(b*c-d)"],
    [b + c * d,"(b+c*d)"],
    [b / c * d,"(b/c*d)"],
    [b * c / d,"(b*c/d)"],

    [b - (c + d),"b-(c+d)"],
    [b - (c - d),"b-(c-d)"],
    [b * (c + d),"b*(c+d)"],
    [b * (c - d),"b*(c-d)"],

    [b / (c + d),"(b/(c+d))"],
    [b / (c - d),"(b/(c-d))"],
    ];


    var res = "";
    for (let i = 0; i < arr3.length; i++) {
      if (24 / arr3[i][0] === a) {
        res += String(a) + "*";
        res += format(b,c,d,arr3[i][1]);
        break
      } else if (24 * arr3[i][0] === a) {
        console.log(arr3[i][0]);
        console.log(arr3[i][1]);
        console.log(a,b,c,d);
        res += String(a) + "/";
        res += format(b,c,d,arr3[i][1]);
        break
      } else if (24 + arr3[i][0] === a) {
        console.log("here");
        res += String(a) + "-";
        res += format(b,c,d,arr3[i][1]);
        break
      } else if (24 - arr3[i][0] === a) {
        res += String(a) + "+";
        res += format(b,c,d,arr3[i][1]);
        break;
      }
    }
    return res;
}

function format(b,c,d,arr,a) {
  var res = "";
  arr.split("").forEach(char => {
          if (char === "a") {
            res += String(a);
          } else if (char === "b") {
            res += String(b);
          } else if (char === "c") {
            res += String(c);
          } else if (char === "d") {
            res += String(d);
          } else {
            res += char;
          }
        });
  return res;
}




function check2(a,b,c,d) {



    var arrPairs = [
      [(a + b) + (c + d),"(a+b)+(c+d)"],
      [(a + b) + (c - d),"(a+b)+(c-d)"],
      [(a - b) + (c + d),"(a-b)+(c+d)"],
      [(a - b) + (c - d),"(a-b)+(c-d)"],

      [(a + b) - (c + d),"(a+b)-(c+d)"],
      [(a + b) - (c - d),"(a+b)-(c-d)"],
      [(a - b) - (c + d),"(a-b)-(c+d)"],
      [(a - b) - (c - d),"(a-b)-(c-d)"],

      [(a + b) * (c + d),"(a+b)*(c+d)"],
      [(a + b) * (c - d),"(a+b)*(c-d)"],
      [(a - b) * (c + d),"(a-b)*(c+d)"],
      [(a - b) * (c - d),"(a-b)*(c-d)"],

      [(a + b) / (c + d),"(a+b)/(c+d)"],
      [(a + b) / (c - d),"(a+b)/(c-d)"],
      [(a - b) / (c + d),"(a-b)/(c+d)"],
      [(a - b) / (c - d),"(a-b)/(c-d)"],
      ];

      var res = "";
      for (let i = 0; i < arrPairs.length; i++) {
        if (arrPairs[i][0] === 24) {
          console.log(arrPairs[i]);
          const cont = format(b,c,d,arrPairs[i][1],a);
          res += cont;
          return res;
          //break;
        }
      }
      // console.log(res);
      return res;
}


equalTo24(8,6,5,9);
