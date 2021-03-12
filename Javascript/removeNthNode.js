


removeNthFromEnd = (head,n) => {
    console.log(n)
let runner = head;
let length = 0
while(runner) {
    length++
    runner = runner.next
}
    if(length==1 && n==1){
        head=null
        return head
    }
    if(length==n){
        head.next = head.next.next
        return head
    }
console.log(length)
length = length-n
runner = head
    console.log(runner)
for(let i = 0; i <= length+1; i++){
    console.log(length-1)
    if(i==length -1){
        console.log(runner)
        runner.next = runner.next.next
        if(runner.next==null){
            return head
        }
        runner.next.next = null
        return head

    }
    if(runner.next!=null){
        runner=runner.next
    }

    
}
}
removeNthFromEnd([1,2,3,4,5],2)