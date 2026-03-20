# Respostas: Flexbox e Eventos

### 1. O que faz o Flexbox?
O **Flexbox** (Flexible Box Layout) é um modelo de layout CSS unidimensional que permite organizar elementos em uma página de forma eficiente e dinâmica. Sua principal função é distribuir o espaço entre os itens e alinhá-los em uma única direção (seja uma linha ou uma coluna), resolvendo problemas complexos de posicionamento que antes exigiam cálculos manuais.

* **Principal utilidade:** Centralizar elementos vertical e horizontalmente, criar colunas de mesma altura e adaptar o layout automaticamente a diferentes tamanhos de tela.

---

### 2. Diferença entre `justify-content` e `align-items`?
A diferença reside no **eixo** em que cada propriedade atua dentro de um container flexível:

* **`justify-content`**: Controla o alinhamento no **Eixo Principal** (Main Axis). Se os itens estiverem em linha (`row`), ele define como eles se distribuem na **horizontal** (ex: no início, no centro ou com espaços entre eles).
* **`align-items`**: Controla o alinhamento no **Eixo Cruzado** (Cross Axis). Se os itens estiverem em linha, ele define como eles se alinham na **vertical** (ex: no topo, centralizados verticalmente ou esticados).

> **Nota:** Se você mudar a direção para coluna (`flex-direction: column`), as funções se invertem: `justify-content` passa a cuidar da vertical e `align-items` da horizontal.

---

### 3. O que é um evento?
No desenvolvimento web, um **Evento** é um sinal enviado pelo navegador para informar que algo aconteceu na página, geralmente através de uma interação do usuário. É o "gatilho" que permite ao JavaScript reagir e tornar a página interativa.

* **Exemplos comuns:** Um clique de mouse (`click`), o pressionar de uma tecla (`keydown`) ou o envio de um formulário (`submit`).
* **Funcionamento:** Usamos um "ouvinte" (`addEventListener`) para monitorar esses sinais. Quando o evento ocorre, o JavaScript executa uma função específica para realizar uma tarefa (como mudar uma cor ou exibir uma mensagem).