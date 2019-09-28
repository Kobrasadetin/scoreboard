import React from 'react'

export default function buildFileSelector() {
    const fileSelector = document.createElement('input');
    fileSelector.setAttribute('type', 'file');
    fileSelector.setAttribute('multiple', 'multiple');
    const handleFileSelect = (e) => {
        e.preventDefault();
        fileSelector.click();
    }
    return handleFileSelect;
}