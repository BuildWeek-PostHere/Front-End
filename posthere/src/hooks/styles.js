import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles({
  textField: {
    fontWeight: 500
  },
  input: {
    color: 'black'
  },
  form: {
    width: '40%',
    minWidth: '400px',
    background: 'white',
    borderRadius: '5px'
  },
  container: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  root: {
    flexGrow: 1,
  },
  anchors: {
    textDecoration: 'none',
    width: '140px'
  },
  anchorText: {
    color: 'white'
  },
  navbar: {
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'flex-start', 

  }
});