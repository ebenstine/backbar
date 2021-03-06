import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    
    
    paper: {
        margin: '4em auto',
        background: 'linear-gradient(to right,  #b6e6ab 0%,#f6f6f6 100%)',
        border: '1px solid #2e6103',
        paddingBottom: '2em',
        width: 650,
        marginBottom: '10em'
    },
    
    
    welcome: {
        color: '#1f4400',
        alignItems: 'center',
        fontSize: 17
        
        
    },
    songCount: {
        color: '#233d4d',
        
        //borderTop: '1.5px solid #6ca0ad',
        paddingRight: '2em',
        paddingLeft: '3.5em',
        paddingTop: '1em',
        fontSize: 19
        
    },

    recordingCount: {
        color: '#233d4d',
        
        paddingRight: '2em',
        paddingLeft: '3.5em',
        fontSize: 19
    },

    button1: {
      
        marginBottom: '-2em',
        marginLeft: '17em',
        color: '#233d4d',
        border: '1px solid #6ca0ad',
        paddingLeft: '.5em',
        paddingRight: '.5em'
   
        
    },

    button2: {
        
        marginBottom: '-2em',
        
        color: '#2e6103',
        background: 'transparent',
        //border: '1px solid #2e6103',
        borderRadius: '4px',
        borderBottom: '3px solid #2e6103',
        paddingLeft: '1em',
        paddingRight: '1em',
        '&:hover': {
            background:'#76a56c',
            color: '#f2f2f2'
            },
     
            

    },
    genrePrompt: {
        color: '#233d4d',
        paddingBottom:'1em',
        paddingRight: '2em',
        paddingLeft: '3.5em',
        //borderBottom: '1.5px solid #6ca0ad'
        fontSize: 19
    },

    playIcon: {
        color:"#1d778d",
        outlineColor: "#233d4d",
        marginLeft: "0em",
        fontSize: 19
    },

    highlight: {

        color: '#1d778d',
        borderBottom: '1.5px solid #eb9148',
        fontSize: 19

    },

    infoCard: {

        backgroundColor: "#d0f7fa",
        border: '1px solid #1d778d'
    
    },

    text: {

        align: 'center'
    }

    


}));

export default useStyles