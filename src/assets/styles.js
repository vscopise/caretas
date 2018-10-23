const styles = theme => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        paddingLeft: 20,
        paddingRight: 20,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 1100,
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
      '& .logo': {
          textAlign: 'center',
      },
      '& .logo_img': {
          maxWidth: '100%',
      },
    },
    toolbar: {
        background: '#dd0008',
    }     
})

export default styles