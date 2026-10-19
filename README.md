# ConcursoAI

Revisão espaçada (SM-2) e caderno de erros para preparação de concursos. O app atual foca na prova de **Analista de TI da Manaus Previdência** e roda 100% no navegador, sem backend: os dados ficam no `localStorage`.

## O que o app faz

- **Hoje:** fila diária com cartões vencidos e cartões novos (limite diário configurável: 5, 10, 15, 20 ou 30).
- **Cartões:** baralho inicial por tópico e criação de cartões próprios.
- **Erros:** caderno de erros com tópico, motivo, enunciado e a regra que você deveria ter aplicado.
- **Domínio:** mostra por onde começar a estudar e os motivos mais frequentes dos seus erros.
- **SM-2 adaptado à prova:** os intervalos de revisão são limitados pela distância até a data da prova (`EXAM_DATE` em `src/data/deck.ts`).

## Stack

| Camada | Tecnologia |
| :-- | :-- |
| UI | React 19 + TypeScript |
| Build | Vite |
| Estilo | Tailwind CSS 4 |
| Rotas | React Router 7 |
| Formulários | React Hook Form + Zod |
| Estado | Context API |
| Persistência | `localStorage` |

## Como rodar

Pré-requisito: Node.js 20+.

```bash
cd frontend
npm install
npm run dev        # http://localhost:5173
```

Outros comandos:

```bash
npm run typecheck  # checagem de tipos
npm run build      # typecheck + build de produção em dist/
npm run preview    # serve o build localmente
```

## Estrutura

```text
frontend/src/
├── components/   # Layout e componentes de UI
├── context/      # StudyContext (estado global)
├── data/         # Baralho, tópicos e data da prova
├── features/study/  # Painel e sessão de estudo
├── lib/          # SM-2, datas, storage, utilidades
├── pages/        # Hoje, Cartões, Erros, Domínio
├── services/     # Cliente HTTP (reservado para um backend futuro)
└── types/
```

## Personalização

Para usar o app em outro concurso, edite `src/data/deck.ts`: `EXAM_DATE`, `TOPICS` e os cartões do baralho.

## Roadmap

- [ ] Backend com API e banco de dados (o cliente em `services/api.ts` e o proxy `/api` do Vite já estão preparados)
- [ ] Geração de flashcards com IA
- [ ] Autenticação e sincronização entre dispositivos

## Licença

MIT © 2026 Carlos Eduardo Leão. Veja o arquivo [LICENSE](LICENSE).
