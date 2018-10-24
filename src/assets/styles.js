const styles = theme => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        paddingLeft: 20,
        paddingRight: 20,
        [theme.breakpoints.up(1180 + theme.spacing.unit * 3 * 2)]: {
            width: '90%',
            maxWidth: '1180',
            marginLeft: 'auto',
            marginRight: 'auto',
        },
        fontFamily: 'PT Serif',
        background: '#fff',
        '& h1, h2, h3, h4, h5, h6': {
            fontFamily: 'Oswald'
        },
    },
    header: {
      paddingTop: 20,
      paddingBottom: 20,
      '& .logo': {
          textAlign: 'center',
      },
      '& .logo_img': {
          maxWidth: '100%',
      },
      '& .logo p': {
        fontFamily: 'Oswald',
        textAlign: 'center',
        color: '#a0a0a0',
        fontSize: '0.9rem',
      }
    },
    toolbar: {
        background: '#dd0008',
        padding: '0',
        minHeight: 'auto',
        marginTop: 20,
        '& a': {
            fontFamily: 'Oswald',
            color: '#fff',
            textDecoration: 'none',
            textTransform: 'uppercase',
            padding: '.625rem .5rem',
            borderLeft: '1px solid #424242'
        },
        '& a:first-child': {
            borderLeftColor: '#dd0008'
        }
    }     
})

export default styles