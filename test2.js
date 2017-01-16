process.stdin.on('readable', function() {
    var buf = process.stdin.read() ;
    if(buf != null) {
        console.log('received: ') ;
        console.log(buf.toString()) ;
    }else {
        console.log('readComplete') ;
    }
})

dvdv
dvdvzd
vf
b

