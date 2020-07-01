import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
      cardStyle: {
            maxWidth: 650,
            display:"contents",
            justifyContent:"center",
          },
          inputStyle:{
            margin: "0 auto",
            textAlign:"center"
          },
          titleStyle:{
            backgroundColor:"orange",
            height: "100px",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            alignItems:"center",
            fontWeight:"bolder",
            fontFamily: "'Open Sans', sans-serif",
            flexDirection:"column",
          },
          cellStyle: {
                  display:"flex",
                  justifyContent:"center",
                  fontWeight:"bolder",
          }
    }));
    

    export default useStyles;