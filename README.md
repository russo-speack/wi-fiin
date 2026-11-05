# Ondas Wi-Fi

Ferramenta web de vistoria técnica de Wi-Fi para residências e empresas. Arquivo único (`index.html`), sem dependências de build.

## O que tem
- **Planta e sinal**: desenhe paredes e cômodos (ou suba uma imagem), escolha o material de cada parede e posicione APs. O mapa de calor usa um modelo de propagação com perda por parede, por banda (2,4, 5 e 6 GHz). Zoom, mover vértices, portas e janelas, medidas, desfazer.
- **Equipamentos**: catálogo de APs TP-Link (Omada), Ubiquiti (UniFi) e Zyxel com especificações e tamanhos desenhados em escala.
- **Rack e rede**: rack em escala (1U = 44,45 mm, 19 pol.), roteadores, MikroTik, switches não gerenciáveis, gerenciáveis e PoE, acessórios. Confere espaço em U, portas, orçamento PoE e profundidade, liga os APs aos switches e mostra a topologia. Aceita equipamento próprio.
- **Teste de banda**: download e latência contra o próprio host da página.
- **Relatório**: resumo com planta, equipamentos, rack, medições e recomendações.

## Como usar
Abra `index.html` no navegador, ou publique em GitHub Pages. O teste de banda precisa do arquivo `speed/blob.wav`:

```bash
./scripts/gerar-blob.sh
```

Os dados ficam no `localStorage` do navegador.

## Limites
- É uma estimativa. Móveis e interferência alteram o resultado: valide com medições reais.
- Valores marcados como `n/c` não constam na ficha consultada; itens marcados como genéricos seguem o padrão EIA-310.
- Confirme os limites da Anatel e a ficha do fabricante antes de fechar uma proposta.
