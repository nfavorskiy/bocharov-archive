<script>
    import { t } from '$lib/i18n';
</script>

<div class="bottom-bar">
    
</div>

<footer>
<table>
    <thead>
        <tr>
            <td>
                <p>{$t.messages.footer.linkRequired}</p>
            </td>
            <td>
                <p>{$t.messages.footer.alexandraBocharova}</p>
            </td>
            <td>
                <p>{$t.messages.footer.elinaSirenko}</p>
            </td>
            <td>
                <p>{$t.messages.footer.nikolayFavorskiy}</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>&copy; {new Date().getFullYear()} {$t.messages.footer.copyright}</p>
            </td>
            <td>
                <p>{$t.messages.footer.alexandraBocharovaRole}</p>
            </td>
            <td>
                <p>{$t.messages.footer.elinaSirenkoRole}</p>
            </td>
            <td>
                <p>{$t.messages.footer.nikolayFavorskiyRole}</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>{$t.messages.footer.rightsReserved}</p>
            </td>
        </tr>
    </thead>
</table>
</footer>

<style>
    footer {
        
        bottom: 0;
        width: 100%;
        text-align: left;
        font-size: 0.6rem;
        line-height: 1.2;
        margin: 0 auto;
        z-index: 1000;

        background-color: var(--bg-color);
        transition: background-color 0.3s, color 0.3s;

        display: flex;
        justify-content: center;
        align-items: center;     
        width: 100%;
    }
    table {
        width: 60%;
    }
    td {
        padding: 0;
    }
    p {
        margin: 0;
    }

    .bottom-bar {
        position: fixed;
        left: 0;
        bottom: 0;
        z-index: -1;

        width: 100vw;
        height: 60px;

        background-color: var(--bg-color);
        transition: background-color 0.3s, color 0.3s;
    }
</style>