<script>
    import { createPageSelector } from "$lib/pageSelector";

    const { pageSelector, nextPage, previousPage } = createPageSelector(25, 4);

    
</script>

<h1>Page Selector POC</h1>

<button on:click={previousPage}>Prev</button>
<button on:click={nextPage}>Next</button>

<pre>
    {JSON.stringify($pageSelector, null, 2)}
</pre>
