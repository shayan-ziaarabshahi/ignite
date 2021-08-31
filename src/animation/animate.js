export const header = {
    hidden: {
        opacity:0,
        translateX:-50
    },
    show: {
        opacity:1,
        translateX:0,
        transition:{
            duration:3
        }
        
    },
    exit: {
        opacity:0,
        translateX:-50,
        transition: {
            duration:2
        }
        
    }
}

export const popup = {
    hidden: {
        opacity:0,
        scale:0
    },
    show: {
        opacity:1,
        scale:1,
        transition:{
            duration:2
        }
        
    },
    exit: {
        opacity:0,
        scale:0,
        transition: {
            duration:2
        }
        
    }
}