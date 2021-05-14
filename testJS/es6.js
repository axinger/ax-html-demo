function timeout(time) {
    // resolve  reject 同时只会执行一个
    return new Promise(function(resolve, reject) {

        if (time > 200) {
            //做一些异步操作
            setTimeout(function() {
                console.log('执行resolve');
                resolve('resolve返回then数据');
            }, time);
        } else {
            setTimeout(function() {
                console.log('执行reject');
                reject('reject返回的是catch数据');
            }, time);
        }
    });


}

// timeout(100).then((value) => {
//     console.log("value = ", value);
// }).catch((err) => {
//     console.log(err);
// });

// timeout(201).then((value) => {

//     console.log(value);
// }).catch((err) => {
//     console.log("err = ", err);
// });


function promiseClick1() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            var num = Math.ceil(Math.random() * 20); //生成1-10的随机数
            console.log('随机数生成的值：', num)
            if (num <= 10) {
                resolve(num);
            } else {
                reject('数字太于10了即将执行失败回调');
            }
        }, 2000);
    })
}

function promiseClick2() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            var num = Math.ceil(Math.random() * 20); //生成1-10的随机数
            console.log('随机数生成的值：', num)
            if (num <= 10) {
                resolve(num);
            } else {
                reject('数字太于10了即将执行失败回调');
            }
        }, 2000);
    })
}

function promiseClick3() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            var num = Math.ceil(Math.random() * 20); //生成1-10的随机数
            console.log('随机数生成的值：', num)
            if (num <= 10) {
                resolve(num);
            } else {
                reject('数字太于10了即将执行失败回调');
            }
        }, 2000);
    })
}

Promise
    .all([promiseClick3(), promiseClick2(), promiseClick1()])
    .then(function(results) {
        console.log(results);
    }).catch((err) => {
        console.log("err = ", err);
    });