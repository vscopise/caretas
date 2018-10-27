const styles = theme => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        paddingLeft: 20,
        paddingRight: 20,
        maxWidth: 1220,
        [theme.breakpoints.up(1180 + theme.spacing.unit * 3 * 2)]: {
            width: '90%',
            //maxWidth: '1180',
            marginLeft: 'auto',
            marginRight: 'auto',
        },
        fontFamily: 'PT Serif',
        background: '#fff',
        '& h1, h2, h3, h4, h5, h6': {
            fontFamily: 'Oswald',
            fontWeight: 400,
            color: '#1f1e1e'
        },
        '& .page-title': {
            fontSize: '2.375rem',
            marginBottom: 20
        },
        '& .content-list': {
            cursor: 'pointer'
        },
        '& .content-list-title': {
            fontSize: '1.5rem',
            marginBottom: 10
        },
        '& .content-list-thumb': {
            maxWidth: '100%',
            height: 'auto'
        },
        '& .entry-title': {
            fontSize: '2.375rem',
            marginBottom: 20
        },
        '& .entry-excerpt': {
            borderTop: '1px solid #888',
            borderBottom: '1px solid #888',
            marginTop: 15,
            marginBottom: 15,
            paddingTop: 8,
            paddingBottom: 10,
        },
        '& .entry-excerpt p': {
            fontSize: '120%',
            color: '#333',
        },
        '& .large_menu': {
            textAlign: 'left',
            background: '#dd0008',
            padding: '0',
            minHeight: 'auto',
            marginTop: 20,
            '& a': {
                display: 'inline-block',
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
        },
        '& .small_menu': {
            background: '#dd0008',
            height: 42,
        }
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
      },
    },
    navbar: {
        
    },
    body: {
        paddingTop: 20,
    }     
})

export default styles