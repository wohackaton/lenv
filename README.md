# LENV — Encontre. Pague. Retire.

MVP da plataforma Health Tech + Geolocalização + Commerce com pagamento via Solana Devnet.

## Stack

- **React 18** + **TypeScript** + **Vite**
- **Tailwind CSS** com Design Tokens
- **Zustand** para estado global
- **Lucide React** para ícones
- **Solana Devnet** (integração preparada para Phantom Wallet)

## Como rodar

```bash
npm install
npm run dev
```

Acesse: http://localhost:3000

## Estrutura

```
src/
├── components/
│   ├── ui/           # Button, Badge, Toast, Tooltip, Skeleton, Loading, EmptyState, ErrorState
│   ├── layout/       # Header, BottomSheet, Modal
│   ├── search/       # SearchBar, SearchResult
│   ├── medication/   # MedicationCard, GenericCard
│   ├── pharmacy/     # PharmacyCard, PharmacyList
│   ├── map/          # MapView, MapToggle
│   └── payment/      # CheckoutModal, PaymentStatus
├── screens/
│   ├── HomeScreen
│   ├── MedicationDetailScreen
│   └── CheckoutScreen
├── hooks/
│   ├── useGeolocation
│   ├── useSearch
│   ├── usePayment
│   └── useWallet
├── services/
│   ├── api.ts        # Mock API (substituir por backend real)
│   ├── solana.ts     # Phantom Adapter + Devnet RPC
│   └── search.ts     # Cache de busca
├── store/
│   └── index.ts      # Zustand store
├── styles/
│   └── tokens.ts     # Design tokens
└── types/
    └── index.ts      # TypeScript types
```

## Funcionalidades Implementadas

- [x] RF01 — Busca por texto com debounce (300ms)
- [x] RF04 — Identificação estruturada do medicamento
- [x] RF05 — Geolocalização com fallback manual
- [x] RF06 — Badge de disponibilidade (Disponível/Estoque limitado/Indisponível)
- [x] RF07 — Preço em R$ (BRL)
- [x] RF08 — Comparação lado a lado
- [x] RF09 — Mapa com pins de farmácias
- [x] RF10 — Ícone ⓘ genérico no Medication Card
- [x] RF11 — Educação sobre genéricos (Bottom Sheet)
- [x] RF12 — Reserva
- [x] RF13 — Checkout com resumo
- [x] RF14 — Pagamento Solana Devnet (Phantom)
- [x] RF15 — Confirmação de pagamento

## Fluxo de Pagamento

```
IDLE → CHECKOUT → WALLET_CONNECT → AWAITING_SIGNATURE → PROCESSING → CONFIRMED
```

Exceções: `REJECTED`, `FAILED`, `EXPIRED`, `CANCELLED`

## Design System

- Paleta: Deep Navy (#102A43), LENV Teal (#18A999), LENV Mint (#E8F8F4)
- Tipografia: Inter (Display 32px → Caption 12px)
- Grid: múltiplos de 4px
- Border Radius: 8px, 12px, 16px, 24px, 999px
- Dark Mode funcional

## Próximos Passos (Pós-MVP)

- [ ] Integração real com backend (criação de pedidos, confirmação)
- [ ] Phantom Wallet Adapter real
- [ ] Mapbox GL JS ou Leaflet para mapa interativo
- [ ] Web Speech API para busca por voz
- [ ] Visão computacional para busca por imagem
- [ ] Devnet → Testnet → Mainnet
- [ ] Definição de ativo de pagamento (stablecoin)
