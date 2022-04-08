const drapAndDrop = () => {
    const card = document.querySelector('.js-card')
    const cells = document.querySelectorAll('.js-cell')

    const dragStart = function() {
        setTimeout(() => {
            this.classList.add('hide')
        }, 0)
        }

    const dragend = function() {
        this.classList.remove('hide')
    }
    const dragover = function(event) {
        event.preventDefault()
    }
    const dragenter = function(event) {
        event.preventDefault()
        this.classList.add('hovered')
    }
    const dragleave = function() {
        this.classList.remove('hovered')
    }
    const drop = function() {
        this.classList.remove('hovered')
        this.append(card)
    }
    cells.forEach(item => {
        item.addEventListener('dragover', dragover)
        item.addEventListener('dragenter', dragenter)
        item.addEventListener('dragleave', dragleave)
        item.addEventListener('drop', drop)
    })
    
    card.addEventListener('dragstart', dragStart)
    card.addEventListener('dragend', dragend)

}

drapAndDrop()