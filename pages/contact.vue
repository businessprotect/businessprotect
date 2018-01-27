<template>
  <section class="main">
    <div class="container">
      <div class="page-header">
        <h2>Contact</h2>
      </div>
      <article class="content">
        <p class="editable">
          Dă-ne un telefon sau trimite-ne un mesaj cu detaliile tale și te vom contacta in cel<br/>mai scurt timp posibil.
          Prima întâlnire este gratuită.
        </p>
        <div class="columns">
          <div class="column">
            <label>Numar Telefon</label>
            <p class="contact-info"><a href="tel:0727463260">072 7463 260</a></p>
            <p class="contact-info"><a href="tel:0722258039">072 2258 039</a></p>
            <label>Adresa Email</label>
            <p class="contact-info"><a href="mailto:npcprotect@gmail.com">npcprotect@gmail.com</a></p>
            <label>Adresa</label>
            <address class="contact-info">
              Iuliu Maniu 61
              <br>Bl. 8P, Ap. 91
              <br>061083 Bucharest
              <br>ROMANIA
            </address>
          </div>
          <div class="column">
            <form name="contact" action="https://formspree.io/npcprotect@gmail.com"
                  method="POST">
              <label for="email_address">Adresa Email / Numar Telefon</label>
              <input id="email_address" type="text" name="email">
              <label for="name">Nume</label>
              <input id="name" type="text" name="name">
              <label for="message">Mesaj</label>
              <textarea id="message" name="message"></textarea>
              <input type="submit" value="Trimite Mesaj">
            </form>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
