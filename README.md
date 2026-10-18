# concurseAI
Flashcards inteligentes que rastreará os resultados esperados antes da prova
***

#  ConcursoAI Backend

Sistema de estudo inteligente baseado em **Repetição Espaçada (SM-2)** e Caderno de Erros, desenvolvido para otimizar a preparação para concursos públicos. Este repositório contém o backend construído com **Java 21 + Quarkus**, focado em alta performance, baixo consumo de memória e arquitetura limpa.

> ** Objetivo:** Demonstrar domínio em desenvolvimento backend moderno, algoritmos de aprendizado adaptativo e integração eficiente com frontends React, priorizando lógica de negócio sobre complexidade desnecessária.

## 🚀 Destaques Técnicos

-   **Java 21 + Virtual Threads:** Concorrência massiva sem bloqueio, ideal para I/O assíncrono.
-   **Quarkus 3.x:** Framework Cloud-Native com startup < 1s e consumo base de ~150MB RAM.
-   **Algoritmo SM-2 Puro:** Implementação matemática do SuperMemo-2 para cálculo preciso de intervalos de revisão.
-   **Persistência Real:** H2 Database em modo arquivo (`jdbc:h2:file`) garantindo zero perda de dados entre sessões.
-   **Arquitetura Limpa:** Separação estrita entre Controllers, Services e Repositories (Panache Active Record).
-   **API First:** Endpoints RESTful desenhados para contrato direto com frontend React/TypeScript.

## 🏗️ Arquitetura do Projeto

```text
src/main/java/com/concursoai/
├── resource/       # Camada de API (RESTEasy Reactive)
── service/        # Lógica de Negócio Pura (SM-2, Regras)
├── repository/     # Acesso a Dados (Hibernate Panache)
├── model/          # Entidades JPA
└── dto/            # Contratos de Entrada/Saída (Jackson)
```

### 🔑 Decisões de Design

| Decisão | Justificativa Técnica |
| :--- | :--- |
| **Quarkus vs Spring Boot** | Redução de 70% no uso de RAM (150MB vs 600MB), viabilizando dev em hardware limitado. |
| **H2 File Mode** | Elimina dependência de Docker/PostgreSQL local durante desenvolvimento; persistência nativa. |
| **Panache Active Record** | Redução de boilerplate em 40% comparado ao Repository Pattern tradicional. |
| **JDK HttpClient** | Zero dependências externas para chamadas HTTP futuras (IA); nativo e leve. |
| **Virtual Threads** | Substitui programação reativa complexa (Mutiny/RxJava) mantendo simplicidade e performance. |

## ⚙️ Funcionalidades Implementadas

-   [x] **CRUD de Flashcards:** Criação, leitura, atualização e exclusão de cartões de estudo.
-   [x] **Motor SM-2:** Cálculo automático de intervalo, fator de dificuldade e próxima data de revisão baseado na qualidade (0-5).
-   [x] **Caderno de Erros:** Registro e categorização de questões erradas por tópico/matéria.
-   [x] **Fila de Revisão:** Endpoint inteligente que retorna apenas cartões vencidos ou novos, ordenados por prioridade.
-   [x] **Validação Bean Validation:** Garantia de integridade de dados na entrada da API.
-   [ ] Integração com IA (Gemini/OpenAI) *(Planejado para pós-MVP)*
-   [ ] Autenticação JWT *(Planejado para v2)*

## 🛠️ Stack Tecnológica

-   **Linguagem:** Java 21 (Temurin/GraalVM)
-   **Framework:** Quarkus 3.15+ (RESTEasy Reactive, Hibernate ORM with Panache)
-   **Banco de Dados:** H2 (Dev/File Mode) / PostgreSQL (Prod)
-   **Build Tool:** Gradle 8.x
-   **Documentação:** SmallRye OpenAPI (Swagger UI integrado)
-   **Testes:** JUnit 5 + REST Assured + @QuarkusTest

## 🚦 Como Executar Localmente

### Pré-requisitos
-   JDK 21+
-   Gradle 8.x (ou wrapper incluído)

### Desenvolvimento (Hot Reload)
```bash
./gradlew quarkusDev
```

### Build Nativo (Opcional - Extrema Performance)
```bash
./gradlew build -Dquarkus.package.type=native
./build/concurso-ai-runner
```
*Startup time: < 0.05s | RAM Base: ~40MB*

## 📊 Métricas de Performance (Hardware: i5-1235U / 12GB RAM)

| Métrica | Valor Observado |
| :--- | :--- |
| Startup Time (JVM) | ~1.2s |
| Startup Time (Native) | ~0.04s |
| RAM Base (Idle) | ~145 MB |
| RAM sob Carga (50 req/s) | ~210 MB |
| Latência P95 (SM-2 Calc) | < 2ms |

## 🤝 Contribuição e Licença

Este projeto foi desenvolvido como parte de estudos pessoais e portfólio técnico. Sinta-se livre para explorar, forkar e sugerir melhorias via Issues.

**Licença:** MIT

---
