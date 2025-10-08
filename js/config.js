// 🚌 CONFIGURAÇÃO DO GERADOR DE MOCKUP - NEFESH FESTIVAL (VERSÃO EXCURSIONISTA)
// ═══════════════════════════════════════════════════════════════════════════════════════════════════
// 📍 LOCAIS DE AJUSTE PRINCIPAIS:
// 
// 1. POSIÇÃO DA IMAGEM: userPhoto (x, y, width, height)
// 2. POSIÇÃO DO TEXTO: textArea (x, y, width, height) 
// 3. CONTROLES DE TIPOGRAFIA: textArea (lineHeightMultiplier, letterSpacing, textScaleFactor)
// 4. TEXTO LIVRE: textArea.freeText (cole qualquer informação de excursão)
//
// ⚠️  SISTEMA HÍBRIDO: Quebra automática + Auto-ajuste + Controles personalizados
// ═══════════════════════════════════════════════════════════════════════════════════════════════════

const MOCKUP_CONFIG = {
  canvasWidth: 1080,
  canvasHeight: 1920,
  mockupImage: "assets/images/mockup-nefesh.png",
  userPhoto: {
    x: 253,
    y: 441,
    width: 544,
    height: 544,
    borderRadius: 272,
  },

  textArea: {
    x: 50,
    y: 1143.34,
    width: 980,
    height: 555.34,
    alignment: "center",
    
    // 🎛️ CONTROLES DE TIPOGRAFIA - AJUSTE AQUI PARA PERSONALIZAR
    lineHeightMultiplier: 2,  // Espaçamento entre linhas (1.0 = colado, 1.5 = mais espaçado)
    letterSpacing: 1.5,            // Espaço entre caracteres em pixels (0 = normal, 3+ = mais espaçado)
    textScaleFactor: 1.0,        // Tamanho geral do texto (1.0 = normal, 1.2 = 20% maior, 0.8 = 20% menor)
    
    // 🚌 TEXTO LIVRE PARA EXCURSÃO - COLE QUALQUER INFORMAÇÃO AQUI
    freeText: `NOME COMPLETO
CIDADE - ESTADO
(11) 99999-9999
SAIDAS: LOCAL DE EMBARQUE
VALOR EXCURSÃO: R$ 00,00`
  },
  typography: {
    fontFamily: "Druk Wide Bold Bold",
    fontSize: 45,
    fontColor: "#e4c76d",
    letterSpacing: 0.5,
    textTransform: "uppercase",
  },
  whatsappIcon: {
    enabled: true,
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    imagePath: "assets/images/whatsapp_icon.png",
  },
  limits: {
    maxLines: 10,  // Aumentado para acomodar mais informações de excursão
    maxCharsPerLine: 50,
    minFontSize: 20,  // Reduzido para permitir mais texto
    maxFontSize: 40,
    containerHeight: 555,  // Ajustado para altura real da textArea
  },
};
