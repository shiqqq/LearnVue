const app = new Vue({
    el: '#app',
    data: {
        books: [
            {
                id: 1, 
                name: '《算法导论》',
                date: '2006-9',
                price: 85.00,
                count:1
            },
            {
                id: 2, 
                name: '《编程艺术》',
                date: '2006-9',
                price: 59.00,
                count:1
            },
            {
                id: 3, 
                name: '《编程珠玑》',
                date: '2006-9',
                price: 39.00,
                count:1
            },
            {
                id: 4, 
                name: '《代码大全》',
                date: '2006-9',
                price: 128.00,
                count:1
            },

        ]
    },
    methods: {
        // getFinalPrice(price){
        //     return '¥' + price.toFixed(2)
        // }
        decrement(index) {
            this.books[index].count--;
            console.log('计数器----',index);
        }, 
        increment(index) {
            this.books[index].count++;
            console.log('计数器+++');
        },
        removeHandle(index) {
            this.books.splice(index, 1);
        }
    },
    filters: {
        //过滤器是个函数，要过滤的值作为参数传入
        showPrice(price){
            return '¥' + price.toFixed(2)
        }
    },
    computed: {
        
            /*
            1.普通的for循环
            for(let i = 0; i < this.books.length; i++){
                totalPrice += this.books[i].price * this.books[i].count
            }

            2.for(let i in this.books)
            for(let i in this.books){
                console.log(i);
                totalPrice += this.books[i].price * this.books[i].count;
            }

            3. 直接拿到数组中的每一项item
            for(let item of this.books){
                totalPrice += item.price * item.count
            }
            */
           totalPrice(){
            return this.books.reduce(function(preValue, book){
               return preValue + book.price * book.count;
           },0)   
        }

    }

})



//