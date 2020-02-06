import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(theme => ({
  textField: {
    border: '1px solid #343536',
    borderRadius: '15px',
    width: '60%'
  },
  input: {
    color: 'black'
  },
  form: {
    width: '40%',
    minWidth: '400px',
    background: '#1A1A1B',
    borderRadius: '5px'
  },
  container: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    minWidth: '400px',
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
  },
  post: {
    display: 'flex',
    flexFlow: 'column',
    borderRadius: '5px',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    minWidth: '300px',
    margin: '20px',
    background: '#1A1A1B',
    color: 'white',
    border: '1px solid #343536'
  },
  darkinput: {
    color: 'white'
  },
  buttonBox: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingBottom: '10px'
  }
}));