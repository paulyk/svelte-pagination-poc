import { writable } from "svelte/store"

export function createPageSelector(total, limit) {

    const state = {
        total,
        limit,
        page: 1
    }

    const store = writable(state)

    function nextPage() {
        store.update(s => {
            s.page = s.page < s.total ? s.page + 1 : s.page
            return s
        })
    }

    function previousPage() {
        store.update(s => {
            s.page = s.page > 1 ? s.page - 1 : s.page
            return s
        })

    }

    return {
        pageSelector: store,
        nextPage,
        previousPage
    }
}