export const tagProperties = {
    'cs-ed' : {
        color: 'cyan',
        text: 'CS education (teaching coding)'
    },
    'art' : {
        color: 'volcano',
        text: 'Art!' 
    },
    'ai' : {
        color: 'purple',
        text: 'AI...'
    },
    'code' : {
        color : 'blue',
        text: 'I coded something'
    },
    'pedagogy' : {
        color: 'gold',
        text: 'I taught something or thought about teaching'
    },
    'design' : {
        color: 'green',
        text: 'I designed something'
    },
    'journo' : {
        color: 'magenta',
        text: 'Journalism :)'
    },
    'work' : {
        color: 'lime',
        text: 'Internship or job'
    },
    'leadership' : {
        color: 'orange',
        text: 'I lead a team'
    },
}


// for rendering tags in the antd multi select easily
export const tagInfo = Object.keys(tagProperties)
        .map((tag)=> {
            return {
                label : tag,
                value: tagProperties[tag].color
            }
        })