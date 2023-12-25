<script>
    import { GetDocPath, SetDocPath } from "../wailsjs/go/main/Config";
    let docPath = "";
    function setDocPath() {
      console.log(docPath)
      SetDocPath(docPath).then(result => console.log("success"))
    }

    GetDocPath().then(result => docPath = result)
  </script>

  <main>
  <label for="docPath">Doc Path:</label>
  <input type="text" id="docPath" name="docPath" bind:value={docPath}/>
  <input type="button" value="Set" on:click={setDocPath}/>
  </main>

  <style>

  </style>
