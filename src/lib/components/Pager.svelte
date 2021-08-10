<script>
    import { createPageSelector } from "$lib/pageSelector";
    import { createEventDispatcher, onMount } from "svelte";

    export let total = 0;
    export let limit = 0;

    const { pageSelector, nextPage, previousPage } = createPageSelector(
        total,
        limit
    );

    const dispatch = createEventDispatcher();


    function onPreviousPage() {
        previousPage();
        dispatchPageSelected();
    }

    function onNextPage() {
        nextPage();
        dispatchPageSelected();
    }

    function dispatchPageSelected() {
        console.log('dispatched')
        dispatch("page-selected", {
            page: $pageSelector.page,
            startIndex: ($pageSelector.page - 1) * $pageSelector.limit,
            endIndex: $pageSelector.startIndex + $pageSelector.limit,
        });
    }

    onMount(() => {
        dispatchPageSelected();
    })
</script>

<button on:click={onPreviousPage}>Prev</button>
<button on:click={onNextPage}>Next</button>
