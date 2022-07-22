'use strict';

/**
     * Crea elementos para agregar al DOM con una clase si es definida en los parametros.
     * @param {typeView} typeView Tipo de elemento a crear para agregar al DOM
     * @param {className} className Nombre de la clase a agregar, si el valor es null
     * se creara un elemento sin la etiqueta class.
     * @returns Elemento para agregar al DOM
     */
export class CreateElementForView {

    create(typeView, className) {
        let tempElement = document.createElement(typeView);
        if (className != null) tempElement.setAttribute('class', className);

        return tempElement;
    }
}