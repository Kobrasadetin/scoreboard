import React, { useCallback } from 'react'
import Box from '@material-ui/core/Box';
import { useDropzone } from 'react-dropzone'
import { makeStyles } from '@material-ui/core/styles'
import Cancel from '@material-ui/icons/Cancel'
import IconButton from '@material-ui/core/IconButton'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles(theme => {
    return ({
        parentBox:
        {
            display: 'flex',
            alignItems: 'flex-start'
        },
        dropzone: {
            border: `4px dotted ${theme.palette.divider}`,
            padding: '0 20px 0 20px'
        },
    })
})

function CsvImport({ setVisible, setCsv }) {

    const classes = useStyles()
    const onDrop = useCallback(acceptedFiles => {
        const reader = new FileReader()

        reader.onabort = () => console.log('file reading was aborted')
        reader.onerror = () => console.log('file reading has failed')
        reader.onload = () => {
            // Do whatever you want with the file contents
            const binaryStr = reader.result
            setCsv(binaryStr)
            setVisible(false)
        }

        acceptedFiles.forEach(file => reader.readAsText(file))
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <Container className={classes.parentBox}>
            <Box><IconButton onClick={() => setVisible(false)}><Cancel /></IconButton></Box>
            <Box className={classes.dropzone} {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
            </Box>
        </Container>
    )
}

export default CsvImport;